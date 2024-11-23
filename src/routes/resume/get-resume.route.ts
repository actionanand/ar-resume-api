import { Request, Response } from 'express';
import path from 'path';


export function getResumeExperience(req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/api/v1/resume/experience.json'));
}

export function getResumeAbout(req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/api/v1/resume/about.json'));
}

export function getResumeHeader(req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/api/v1/resume/header.json'));
}

export function getResumeHobbyProject(req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/api/v1/resume/hobby-projects.json'));
}

export function getResumeSkills(req: Request, res: Response) {
  res.status(200).sendFile(path.join(__dirname + '../../../db/api/v1/resume/skills.json'));
}
