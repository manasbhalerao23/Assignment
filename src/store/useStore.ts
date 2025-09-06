import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { 
  SidebarState, 
  LeadDetailState, 
  ModalState, 
  LeadFilters, 
  CampaignFilters 
} from '@/types';

interface AppState {
  // Sidebar state
  sidebar: SidebarState;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setActiveItem: (item: string) => void;

  // Lead detail side sheet
  leadDetail: LeadDetailState;
  openLeadDetail: (leadId: number) => void;
  closeLeadDetail: () => void;

  // Modal state
  modal: ModalState;
  openModal: (type: 'create' | 'edit' | 'delete', data?: unknown) => void;
  closeModal: () => void;

  // Lead filters
  leadFilters: LeadFilters;
  setLeadFilters: (filters: Partial<LeadFilters>) => void;
  resetLeadFilters: () => void;

  // Campaign filters
  campaignFilters: CampaignFilters;
  setCampaignFilters: (filters: Partial<CampaignFilters>) => void;
  resetCampaignFilters: () => void;

  // Selected items for bulk actions
  selectedLeads: number[];
  selectedCampaigns: number[];
  toggleLeadSelection: (leadId: number) => void;
  toggleCampaignSelection: (campaignId: number) => void;
  selectAllLeads: (leadIds: number[]) => void;
  selectAllCampaigns: (campaignIds: number[]) => void;
  clearLeadSelection: () => void;
  clearCampaignSelection: () => void;

  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;

  // Search state
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Sidebar state
      sidebar: {
        isCollapsed: false,
        activeItem: 'dashboard',
      },
      toggleSidebar: () =>
        set((state) => ({
          sidebar: {
            ...state.sidebar,
            isCollapsed: !state.sidebar.isCollapsed,
          },
        })),
      setSidebarCollapsed: (collapsed) =>
        set((state) => ({
          sidebar: {
            ...state.sidebar,
            isCollapsed: collapsed,
          },
        })),
      setActiveItem: (item) =>
        set((state) => ({
          sidebar: {
            ...state.sidebar,
            activeItem: item,
          },
        })),

      // Lead detail side sheet
      leadDetail: {
        isOpen: false,
        leadId: null,
      },
      openLeadDetail: (leadId) =>
        set({
          leadDetail: {
            isOpen: true,
            leadId,
          },
        }),
      closeLeadDetail: () =>
        set({
          leadDetail: {
            isOpen: false,
            leadId: null,
          },
        }),

      // Modal state
      modal: {
        isOpen: false,
        type: null,
        data: null,
      },
      openModal: (type, data) =>
        set({
          modal: {
            isOpen: true,
            type,
            data,
          },
        }),
      closeModal: () =>
        set({
          modal: {
            isOpen: false,
            type: null,
            data: null,
          },
        }),

      // Lead filters
      leadFilters: {},
      setLeadFilters: (filters) =>
        set((state) => ({
          leadFilters: {
            ...state.leadFilters,
            ...filters,
          },
        })),
      resetLeadFilters: () => set({ leadFilters: {} }),

      // Campaign filters
      campaignFilters: {},
      setCampaignFilters: (filters) =>
        set((state) => ({
          campaignFilters: {
            ...state.campaignFilters,
            ...filters,
          },
        })),
      resetCampaignFilters: () => set({ campaignFilters: {} }),

      // Selected items
      selectedLeads: [],
      selectedCampaigns: [],
      toggleLeadSelection: (leadId) =>
        set((state) => ({
          selectedLeads: state.selectedLeads.includes(leadId)
            ? state.selectedLeads.filter((id) => id !== leadId)
            : [...state.selectedLeads, leadId],
        })),
      toggleCampaignSelection: (campaignId) =>
        set((state) => ({
          selectedCampaigns: state.selectedCampaigns.includes(campaignId)
            ? state.selectedCampaigns.filter((id) => id !== campaignId)
            : [...state.selectedCampaigns, campaignId],
        })),
      selectAllLeads: (leadIds) => set({ selectedLeads: leadIds }),
      selectAllCampaigns: (campaignIds) => set({ selectedCampaigns: campaignIds }),
      clearLeadSelection: () => set({ selectedLeads: [] }),
      clearCampaignSelection: () => set({ selectedCampaigns: [] }),

      // Theme
      theme: 'system',
      setTheme: (theme) => set({ theme }),

      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'linkbird-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sidebar: state.sidebar,
        theme: state.theme,
      }),
    }
  )
);
            