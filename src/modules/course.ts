import courses from "../data/courses";

export const findCourseById = (id: string) =>
  courses.find(crs => crs.id === id);
