import { ROLE_ADMIN, ROLE_AGENT } from "@/constants/roles";

export function allowedAdminRoles(roles) {
    return roles?.some((role) => [ROLE_ADMIN, ROLE_AGENT].includes(role));
}

export function getAuthToken() {
    return localStorage.getItem("authToken");
}

