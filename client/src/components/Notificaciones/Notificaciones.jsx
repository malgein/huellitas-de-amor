// import React from "react";

import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
// import { MonitorMobileIcon } from "./MonitorMobileIcon";
// import { ShieldSecurityIcon } from "./ShieldSecurityIcon";
// import { InfoIcon } from "./InfoIcon";
// import { InvalidCardIcon } from "./InvalidCardIcon";
import { useNavigate } from "react-router-dom";

const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState ([]);
  const navigate = useNavigate();
  
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",

    
  };
   // Simula la recepción de nuevas notificaciones
  useEffect(() => {
    const nuevasNotificaciones = [
      {
        id: 1,
        titulo: 'Nueva Solicitud de Adopción',
        subtitulo: 'Haz recibido una nueva solicitud de adopción',
        contenido: 'Haz recibido una nueva solicitud de adopción. Por favor, revisa los detalles en el dashboard.'
      },
      // ... otras notificaciones
    ];

    setNotificaciones(nuevasNotificaciones);
  }, []);

  const handleVerDetalles = () => {
    navigate('/dashboard');
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      showDivider={false}
      className="p-2 flex flex-col gap-1 w-full max-w-[300px]"
      variant="shadow"
      itemClasses={itemClasses}
    >
      {/* <AccordionItem
        key="1"
        aria-label="Connected devices"
        // startContent={<MonitorMobileIcon className="text-primary" />}
        subtitle={
          <p className="flex">
            2 issues to <p className="text-primary ml-1">fix now</p>
          </p>
        }
        title="Connected devices"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Apps Permissions"
        // startContent={<ShieldSecurityIcon />}
        subtitle="3 apps have read permissions"
        title="Apps Permissions"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Pending tasks"
        classNames={{ subtitle: "text-warning" }}
        // startContent={<InfoIcon className="text-warning" />}
        subtitle="Complete your profile"
        title="Pending tasks"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Card expired"
        classNames={{ subtitle: "text-danger" }}
        // startContent={<InvalidCardIcon className="text-danger" />}
        subtitle="Please, update now"
        title={
          <p className="flex gap-1 items-center">
            Card expired
            <p className="text-default-400 text-small">*4812</p>
          </p>
        }
      >
        
        {defaultContent}
      </AccordionItem>
    </Accordion> */}
         {notificaciones.map((notificacion) => (
        <AccordionItem
          key={notificacion.id}
          aria-label={notificacion.titulo}
          subtitle={notificacion.subtitulo}
          title={notificacion.titulo}
        >
          <p>{notificacion.contenido}</p>
          <button onClick={handleVerDetalles}>Ver detalles</button>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
 

export default Notificaciones;

// const Notificaciones = () => {

// {modalabierto && (
//     <div className={styles.modal}>
//       <div className={styles.modalContent}>
//         <h2 className={styles.notih2}>Notificaciones</h2>
//         <ul className={styles.notificationlist}>
//           <li>
//             <div className={styles.notification}>
//               <div className={styles.notificationinfo}>
//                 <span className={styles.notificationtitle}>
//                   Nueva notificación 1
//                 </span>
//                 <br />
//                 <span className={styles.notificationtime}>Hace 1 hora</span>
//               </div>
//               <button className={styles.notificationaction}>Ver</button>
//             </div>
//           </li>
//           <li>
//             <div className={styles.notification}>
//               <div className={styles.notificationinfo}>
//                 <span className={styles.notificationtitle}>
//                   Nueva notificación 2
//                 </span>
//                 <br />
//                 <span className={styles.notificationtime}>Hace 3 hora</span>
//               </div>
//               <button className={styles.notificationaction}>Ver</button>
//             </div>
//           </li>
//           <li>
//             <div className={styles.notification}>
//               <div className={styles.notificationinfo}>
//                 <span className={styles.notificationtitle}>
//                   Nueva notificación 3
//                 </span>
//                 <br />
//                 <span className={styles.notificationtime}>Hace 5 hora</span>
//               </div>
//               <button className={styles.notificationaction}>Ver</button>
//             </div>
//           </li>
//         </ul>
//         <button className={styles.close} onClick={CerrarModal}>
//           Cerrar
//         </button>
//       </div>
//     </div>
//   )}
// }
