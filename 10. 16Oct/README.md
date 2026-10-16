## Anatomía de una plataforma digital

    - TCP: sirve para todas las aplicaciones de sistemas de información que necesitan que el servidor nos confirme que ha recibido la información o que el servidor confirme que ha procesado la petición del usuario.
    -UDP: Se utilizan en sistemas de información donde no necesitamos acuse de recibe.
Por ejemplo: Cuando nos metemos en nuestra cuenta de netflix con nuestras credenciales usamos el protocolo TCP, cuando buscamos una película seguimos con el mismo protocolo,pero cuando comenzamos a ver la película cambiamos al protocolo UDP ya que no necesitamos acuse de recibos. Hoy en día varias web trabajan con ambos protocolos(son **híbridas**).

### https
Encripta la información enviada agregando una capa extra de seguridad a la conexión. La encriptación se genera en la capa de transporte.

- La arquitectura moderna mira como mala práctica que el cliente se conecte directamente al servidor. En lugar de conectarse directo al servidor, el ciente se conecta a una capa(backend).

