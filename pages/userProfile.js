export default function Main(){
    return (
        <div className = {s.container}>
            <div className = {s.sidebar}>

            </div>
            <div className = {s.main_dashboard}>
                <text>
                   Submeter projeto 
                </text>
                <div className = {second_dashboard}>
                    <div className = {division_clip}>
                        <div className = {s.project_name}></div>
                        <div className = {s.link_project}></div>
                        <div className = {s.description}></div>
                    </div>
                    <div className = {division_clip}>
                        <div className = {s.PDFPresentation}></div>
                        <div className = {s.button_clipper}></div>
                        <div className = {s.added_link}></div>
                        <div className = {s.send_button}></div>
                    </div>
                </div>

            </div>

        </div>
    )
}