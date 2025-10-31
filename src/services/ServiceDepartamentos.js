import axios from "axios";
import Global from "@/Global";

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let request = "api/Departamentos"
            let url = Global.urlApiDepartamentos + request
            let departamentos = []
            axios.get(url).then(response => {
                departamentos = response.data
                resolve(departamentos)
            })
        })
    }

    insertDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/Departamentos"
            let url = Global.urlApiDepartamentos + request
            axios.post(url, departamento).then(response => {
                resolve(response.data)
            })
        })
    }

    findDepartamento(id) {
        return new Promise(function (resolve) {
            let request = "api/Departamentos/" + id
            let url = Global.urlApiDepartamentos + request
            axios.get(url).then(response => {
                console.log("find departamento")
                resolve(response.data)
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/Departamentos"
            let url = Global.urlApiDepartamentos + request
            axios.put(url, departamento).then(response => {
                console.log("actualizado")
                resolve(response.data)
            })
        })
    }

    deleteDepartamento(id) {
        return new Promise(function (resolve) {
            let request = "api/Departamentos/" + id
            let url = Global.urlApiDepartamentos + request
            axios.delete(url).then(response => {
                console.log("delete departamento")
                resolve(response.data)
            })
        })
    }
}