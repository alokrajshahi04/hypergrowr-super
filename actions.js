import { HttpError } from 'wasp/server'

export const createWebsite = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Website.create({
    data: {
      userId: context.user.id,
      content: args.content,
      layout: args.layout
    }
  });
}

export const createMarketingCampaign = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.MarketingCampaign.create({
    data: {
      title: args.title,
      content: args.content,
      userId: context.user.id,
      status: 'Draft'
    }
  });
}

export const createSEOReport = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.SEOReport.create({
    data: {
      userId: context.user.id,
      keywords: args.keywords,
      seoPerformance: args.seoPerformance
    }
  });
}

export const createAnalyticsReport = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.AnalyticsReport.create({
    data: {
      userId: context.user.id,
      data: args.data,
      dateCreated: new Date()
    }
  });
}