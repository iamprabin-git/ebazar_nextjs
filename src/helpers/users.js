import { ROLE_ADMIN, ROLE_AGENT, ROLE_USER } from "@/constants/roles";

export function getRole(roles=[]) {
    if (roles.includes(ROLE_ADMIN)) return ROLE_ADMIN;
    if (roles.includes(ROLE_AGENT)) return ROLE_AGENT;
    return ROLE_USER;
}

export function allowedAdminRoles(role) {
    if (role == ROLE_ADMIN) return [ROLE_USER, ROLE_AGENT, ROLE_ADMIN];
    if (role == ROLE_AGENT) return [ROLE_USER, ROLE_AGENT];
    return [ROLE_USER];
}