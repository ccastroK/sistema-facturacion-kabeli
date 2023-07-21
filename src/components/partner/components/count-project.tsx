import { ICountProject } from "@/Domain/interfaces/components/partner-dasboard.interface";
// CRW  y esto? ponerle SPAN
export const CountProject = ({ count, projectType }: ICountProject) => (
  <section>
    <h2>{count}</h2>
    <div>
      <h4>{projectType}</h4>
    </div>
  </section>
);
