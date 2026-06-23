import apiClient from "@/lib/api";

export const getInvitationData = async ( slug ) => {
  try {
    const { data } = await apiClient.get(`/invitations/url/${slug}`);
    return data;
  } catch (error) {
    throw error;
  }
};
