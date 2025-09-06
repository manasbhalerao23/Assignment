import { pgTable, text, timestamp, integer, serial, varchar, decimal, primaryKey, boolean } from 'drizzle-orm/pg-core';

// Users table (managed by Better Auth)
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean("emailVerified").default(false).notNull(),
  image: text('image'),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow(),
});

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt', { mode: 'date' }),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt', { mode: 'date' }),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt', { mode: 'date' }).notNull(),
  token: text('token').notNull().unique(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow(),
});

// Campaigns table
export const campaigns = pgTable('campaigns', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  status: varchar('status', { length: 50 }).notNull().default('draft'),
  totalLeads: integer('total_leads').default(0),
  successfulLeads: integer('successful_leads').default(0),
  responseRate: decimal('response_rate', { precision: 5, scale: 2 }).default('0.00'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

// Leads table
export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  position: varchar('position', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  linkedinUrl: text('linkedin_url'),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  lastContactDate: timestamp('last_contact_date', { mode: 'date' }),
  notes: text('notes'),
  campaignId: integer('campaign_id').notNull().references(() => campaigns.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

// Lead interactions table
export const leadInteractions = pgTable('lead_interactions', {
  id: serial('id').primaryKey(),
  leadId: integer('lead_id').notNull().references(() => leads.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).notNull(), // email, call, meeting, note
  subject: varchar('subject', { length: 255 }),
  content: text('content'),
  date: timestamp('date', { mode: 'date' }).defaultNow(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
});


export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(), // <-- this is REQUIRED
  expiresAt: timestamp("expiresAt", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow(),
});

export const schema = {
  user,
  account,
  session,
  campaigns,
  leads,
  leadInteractions,
  verification,
};
