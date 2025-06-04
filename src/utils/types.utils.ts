import { ReactNode } from "react";
import { NotificationType } from "./enums.utils";

export type NavLink = {
  name: string;
  href: string;
}

export type SocialLink = {
  icon: ReactNode;
  href: string;
  label: string;
}

export type Skill = {
  name: string;
  icon: ReactNode;
  level: number;
}

export type ExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string;
  delay: number;
}

export type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  link: string;
  tech: string[];
  isPersonal: boolean;
}

export type Service = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export type ContactProps = {
  icon: ReactNode;
  label: string;
  value: string;
  delay: number;
}

export type SocialLinkProps = {
  icon: ReactNode;
  href: string;
  label: string;
  delay: number;
}

export type NotificationProps = {
  type: NotificationType;
  message: string;
  isVisible: boolean;
  onClose?: () => void;
}
