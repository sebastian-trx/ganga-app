import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./we.css";
import welcomeModal from "../../Resources/bienvenidosModal.gif";
import prodModal1 from "../../Resources/producModal1.gif";
import prodModal2 from "../../Resources/producModal2.gif";
import prodModal3 from "../../Resources/producModal3.gif";

function Nosotros() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bgWe">
      <div className="welcomeModal">
        <img src={welcomeModal} alt="" />
      </div>
      <div className="WeContainer" id="Nosotros">
        <h1>Todos queremos una GanGa</h1>
        <p>
          Somos un equipo dispuesto para que tengas la mejor experiencia en
          obtener el producto que quieres, cuando quieres. <br></br>
          Tenemos un catálogo lleno de productos nuevos y usados listo para
          llegar a tus manos y disfrutarlo al máximo.
        </p>{" "}
        <br />
        <div className="hvr-grow-shadow">
          <Button
            className="BtnUsModal"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
            }}
            onClick={handleOpen}
          >
            Saber más
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Style">
            <Typography id="modal-modal-title" className="TitleModal">
              <h1>Comunidad GanGa</h1>
            </Typography>
            <div className="PortadaModal"></div>
            <Typography
              id="modal-modal-description"
              className="TextModal"
              sx={{ mt: 2 }}
              variant="h6"
            >
              <p>
                Únete y vende tus productos, ten una comunidad que te respalde
                siempre en tu negocio.
              </p>
              <p>
                Productos de buena calidad y al mejor precio solo lo puedes
                encontrar aquí en GanGa
              </p>
              <p>
                No esperes más y únete a nuestra comunidad de vendedores, donde
                muchos clientes esperan por tus productos.
              </p>
              <br />
            </Typography>
            <Button
              className="ButtonModal"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 10,
              }}
              href="/catalogo"
            >
              Ver catálogo
            </Button>
          </Box>
        </Modal>
      </div>
      <div className="containerProducModal">
        <div className="prodModal1">
          <img src={prodModal1} alt="" />
        </div>
        <div className="prodModal2">
          <img src={prodModal2} alt="" />
        </div>
        <div className="prodModal3">
          <img src={prodModal3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
