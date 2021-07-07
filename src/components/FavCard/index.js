import React, { useState } from "react";
import Modal from "../Modal";
import ModalForm from "../ModalForm";
import styles from "./favcard.module.css";

function FavCard({ property }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.all}>
      <div className={styles.border}>
        <div className={styles.user}>{property.username}</div>
        {showModal && (
          <Modal>
            <ModalForm property={property} setShowModal={setShowModal} />
          </Modal>
        )}
        <div className={styles.image}>
          <img src={property.url} alt="user" />
        </div>
        <div>
          <button className={styles.delete} onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavCard;
