import { ISeeker } from "./SeekerSchema";
import * as seekerDao from "./SeekerDao";

export async function createSeeker(seeker: ISeeker): Promise<ISeeker> {
  let currentSeeker = await seekerDao.findAllSeekers({ user: seeker.user });
  if (currentSeeker.length > 0) {
    return currentSeeker[0];
  }

  const newSeeker = await seekerDao.createSeeker(seeker);
  return newSeeker;
}

export async function updateSeeker(seekerId: string, updatedSeeker: ISeeker): Promise<boolean> {
  try {
    await seekerDao.updateSeeker(seekerId, updatedSeeker);
    return true;
  } catch (error) {
    console.error("Error updating seeker:", error);
    return false;
  }
}

export async function deleteSeeker(seekerId: string): Promise<boolean> {
  try {
    await seekerDao.deleteSeeker(seekerId);
    return true;
  } catch (error) {
    console.error("Error deleting seeker:", error);
    return false;
  }
}

export async function getSeekers(queryParams): Promise<ISeeker[]> {
  return await seekerDao.findAllSeekers(queryParams);
}

export async function getSeekerById(seekerId: string): Promise<ISeeker | null> {
  return await seekerDao.findSeekerById(seekerId);
}

export const getMySeeker = async (token): Promise<ISeeker | null> => {
  const userId = token.userId;
  const seekers = await getSeekers({ user: userId });
  return seekers && seekers.length > 0 ? seekers[0] : null;
};
