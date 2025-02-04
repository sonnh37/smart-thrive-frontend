import {axiosGet} from "./base-service";

export const getSessionsByStudentId = async (studentId: string) => {
    return await axiosGet(`/sessions/schedule/${studentId}`, {});
};

export const get4CommingSessionsByStudentId = async (studentId: string) => {
    return await axiosGet(`/sessions/comming/${studentId}`, {});
};