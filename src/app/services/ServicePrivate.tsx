import ApiBack from "../util/domains/ApiBack";

class ServicePrivate {
  // Service with bearer to do request GET
  // *******************************************************************
  public static async requestGET(urlService: string) {
    //const bearer = "Bearer " + String(localStorage.getItem("tokenHitData"));

    const url = ApiBack.URL + urlService;
    const respuesta = fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => { return datos; })
      .catch((miError) => { return miError; });
    return respuesta;
  }
}

export default ServicePrivate;
