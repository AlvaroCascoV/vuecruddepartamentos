import axios from "axios";
import Global from "@/Global";

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let request = "api/Departamentos"
            let url = Global.urlApiDepartamentos + request
            let departamentos = []
            axios(url).then(response => {
                departamentos = response.data
                resolve(departamentos)
            })
        })
    }
}