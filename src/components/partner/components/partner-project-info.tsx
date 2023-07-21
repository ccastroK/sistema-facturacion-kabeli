import { IPartnerProjectInfo } from "@/Domain/interfaces/components/partner-dasboard.interface";
import { CountProject } from "./count-project";


export const PartnerProjectInfo =  ({projectInfo,className}:IPartnerProjectInfo) => {
    return (
        <section className={className}>
            {/* <h5>Proyectos</h5> */}
            {projectInfo.map((item,key)=> (
                <CountProject key={key} count={item.count} projectType={item.projectType} />
            ))}
        </section>
    )
}