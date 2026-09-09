import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function Produto() {
    const [botao, setBotao] = useState(false);

    return (
        <div
            style={{
                border: "1px solid black",
                width: "100px",
                height: "100px",
                padding: "10px",
                boxSizing: "border-box",
                textAlign: "center"
            }}
        >
            <h3
                style={{
                    fontSize: "14px",
                    margin: "5px 0 15px 0"
                }}
            >
                {botao ? "Favoritado" : ""}
            </h3>

            <button
                onClick={() => setBotao(!botao)}
                style={{
                    fontSize: "12px",
                    padding: "4px 8px",
                    cursor: "pointer"
                }}
            >
                Favorito
            </button>

            <div className="container">
                <div
                    className="favorito"
                    onClick={() => setBotao(!botao)}
                    style={{ cursor: "pointer" }}
                >
                    {botao ? (
                        <FaHeart color="red" />
                    ) : (
                        <FaRegHeart />
                    )}
                </div>

                <div>
                    imagem
                </div>

                <div className="preço">
                </div>
            </div>
        </div>
    );
}
