import { HttpError } from 'wasp/server'

export const getUserWebsites = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Website.findMany({
    where: { userId: args.userId }
  });
}

export const getUserMarketingCampaigns = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.MarketingCampaign.findMany({ where: { userId: args.userId } });
}

export const getUserSEOReports = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.SEOReport.findMany({
    where: {
      userId: args.userId
    }
  });
}

export const getUserAnalyticsReports = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.AnalyticsReport.findMany({
    where: { userId: args.userId }
  });
}