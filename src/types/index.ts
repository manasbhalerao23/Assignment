export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Campaign {
  id: number;
  name: string;
  description?: string | null;
  status: 'draft' | 'active' | 'paused' | 'completed';
  totalLeads: number;
  successfulLeads: number;
  responseRate: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: string | null;
  position?: string | null;
  phone?: string | null;
  linkedinUrl?: string | null;
  status: 'pending' | 'contacted' | 'responded' | 'converted' | 'rejected';
  lastContactDate?: Date | null;
  notes?: string | null;
  campaignId: number;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  campaign?: Campaign;
}

export interface LeadInteraction {
  id: number;
  leadId: number;
  type: 'email' | 'call' | 'meeting' | 'note';
  subject?: string | null;
  content?: string | null;
  date?: Date;
  userId: string;
  createdAt?: Date;
}

export interface LeadWithDetails extends Lead {
  interactions: LeadInteraction[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filter and Search Types
export interface LeadFilters {
  search?: string;
  status?: string;
  campaignId?: number;
  company?: string;
}

export interface CampaignFilters {
  search?: string;
  status?: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalCampaigns: number;
  activeCampaigns: number;
  totalLeads: number;
  convertedLeads: number;
  averageResponseRate: number;
  recentActivity: LeadInteraction[];
}

// UI State Types
export interface SidebarState {
  isCollapsed: boolean;
  activeItem: string;
}

export interface LeadDetailState {
  isOpen: boolean;
  leadId: number | null;
}

export interface ModalState {
  isOpen: boolean;
  type: 'create' | 'edit' | 'delete' | null;
  data?: unknown;
}

export interface Interaction {
  id: number;
  type: string;
  subject?: string;
  content?: string;
  date?: string;
  createdAt: string;
}
