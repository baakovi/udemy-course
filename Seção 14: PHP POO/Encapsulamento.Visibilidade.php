<?php

    # Encapsulamento na programação significa esconder os dados contidos nas propriedades de uma classe.

    class Veiculo{

        # public, private, protected

        private $placa;
        private $cor;
        protected $tipo='Caminhonete';
        // private $tipo;

        public function setPlaca($parametro_placa) {
            $this->placa = $parametro_placa;
        }

        public function getPlaca() {
            return $this->placa;
        }

    }

    class Carro extends Veiculo{
        public function exibirTipo() {
            echo $this->tipo;
        }
    }

    $veiculo = new Veiculo();
    $veiculo->setPlaca("BIA1871");
    echo $veiculo->getPlaca();
    // $veiculo->placa = "BIA1871";

    // echo $veiculo->placa;

    $carro = new Carro();
    $carro->exibirTipo();

?>