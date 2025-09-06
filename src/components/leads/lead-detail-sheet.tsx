'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useStore } from '@/store/useStore';
import { formatDateTime, getStatusColor } from '@/lib/utils';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  MessageSquare, 
  ExternalLink,
  Edit,
  Save,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { Interaction } from '@/types';

const statusOptions = [
  { value: 'pending', label: 'Pending' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'responded', label: 'Responded' },
  { value: 'converted', label: 'Converted' },
  { value: 'rejected', label: 'Rejected' },
];

async function fetchLeadDetails(leadId: number) {
  const response = await fetch(`/api/leads/${leadId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch lead details');
  }
  return response.json();
}

async function updateLeadStatus(leadId: number, status: string) {
  const response = await fetch(`/api/leads/${leadId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error('Failed to update lead status');
  }
  return response.json();
}

async function addInteraction(data: {
  leadId: number;
  type: string;
  subject?: string;
  content: string;
}) {
  const response = await fetch('/api/lead-interactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to add interaction');
  }
  return response.json();
}

export function LeadDetailSheet() {
  const { leadDetail, closeLeadDetail } = useStore();
  const { isOpen, leadId } = leadDetail;
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState('');

  const queryClient = useQueryClient();

  const { data: lead, isLoading } = useQuery({
    queryKey: ['lead-details', leadId],
    queryFn: () => fetchLeadDetails(leadId!),
    enabled: isOpen && !!leadId,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ leadId, status }: { leadId: number; status: string }) => 
      updateLeadStatus(leadId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lead-details', leadId] });
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      setIsEditingStatus(false);
      toast.success('Lead status updated successfully');
    },
    onError: () => {
      toast.error('Failed to update lead status');
    },
  });

  const addNoteMutation = useMutation({
    mutationFn: addInteraction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lead-details', leadId] });
      setIsAddingNote(false);
      setNewNote('');
      toast.success('Note added successfully');
    },
    onError: () => {
      toast.error('Failed to add note');
    },
  });

  const handleStatusUpdate = () => {
    if (leadId && newStatus && newStatus !== lead?.status) {
      updateStatusMutation.mutate({ leadId, status: newStatus });
    } else {
      setIsEditingStatus(false);
    }
  };

  const handleAddNote = () => {
    if (leadId && newNote.trim()) {
      addNoteMutation.mutate({
        leadId,
        type: 'note',
        content: newNote.trim(),
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLeadDetail();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeLeadDetail}>
      <SheetContent 
        className="w-full sm:max-w-lg overflow-y-auto"
        onKeyDown={handleKeyDown}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-linkbird-500"></div>
          </div>
        ) : lead ? (
          <div className="space-y-6">
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                <span>{lead.firstName} {lead.lastName}</span>
                <div className="flex items-center space-x-2">
                  {isEditingStatus ? (
                    <div className="flex items-center space-x-2">
                      <Select value={newStatus} onValueChange={setNewStatus}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button 
                        size="sm" 
                        onClick={handleStatusUpdate}
                        disabled={updateStatusMutation.isPending}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => setIsEditingStatus(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setIsEditingStatus(true);
                          setNewStatus(lead.status);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </SheetTitle>
            </SheetHeader>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="font-medium">{lead.email}</p>
                    <p className="text-sm text-gray-500">Email</p>
                  </div>
                </div>
                
                {lead.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{lead.phone}</p>
                      <p className="text-sm text-gray-500">Phone</p>
                    </div>
                  </div>
                )}
                
                {lead.company && (
                  <div className="flex items-center space-x-3">
                    <Building className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{lead.company}</p>
                      {lead.position && (
                        <p className="text-sm text-gray-500">{lead.position}</p>
                      )}
                    </div>
                  </div>
                )}
                
                {lead.linkedinUrl && (
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="h-4 w-4 text-gray-500" />
                    <a 
                      href={lead.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-linkbird-500 hover:text-linkbird-600"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Campaign Information */}
            {lead.campaign && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Campaign</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{lead.campaign.name}</p>
                      <p className="text-sm text-gray-500">
                        Created {formatDateTime(lead.createdAt)}
                      </p>
                    </div>
                    <Badge className={getStatusColor(lead.campaign.status)}>
                      {lead.campaign.status.charAt(0).toUpperCase() + lead.campaign.status.slice(1)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Interaction History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  Interaction History
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setIsAddingNote(true)}
                  >
                    Add Note
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add Note Form */}
                {isAddingNote && (
                  <div className="space-y-3 p-4 border rounded-lg bg-gray-50">
                    <Textarea
                      placeholder="Add a note about this lead..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      className="min-h-20"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => {
                          setIsAddingNote(false);
                          setNewNote('');
                        }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={handleAddNote}
                        disabled={!newNote.trim() || addNoteMutation.isPending}
                      >
                        {addNoteMutation.isPending ? 'Adding...' : 'Add Note'}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Interactions List */}
                {lead.interactions?.length > 0 ? (
                  <div className="space-y-3">
                    {lead.interactions.map((interaction: Interaction, index: number) => (
                      <div 
                        key={interaction.id || index} 
                        className="flex items-start space-x-3 p-3 border rounded-lg"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <MessageSquare className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium capitalize">
                              {interaction.type}
                              {interaction.subject && `: ${interaction.subject}`}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatDateTime(interaction.date || interaction.createdAt)}
                            </p>
                          </div>
                          {interaction.content && (
                            <p className="text-sm text-gray-600 mt-1">
                              {interaction.content}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No interactions yet</p>
                    <p className="text-sm">Add a note to start tracking interactions</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-2 pt-4">
              <Button className="flex-1 bg-linkbird-500 hover:bg-linkbird-600">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline" className="flex-1">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Lead not found
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}