#!/bin/bash
set -e

ENVIRONMENT=$1

if [[ -z "$ENVIRONMENT" ]]; then
  echo "[x] Error: El entorno es requirido...saliendo"
  exit 1
fi

function error() {
    TOOL=$1
    URL=$2

    echo "[x] Error: $TOOL no esta instalado."
    echo "Por favor, instalalo en $URL"
    exit 1
}

echo "--- Preparing environment for $ENVIRONMENT ---"
echo "[?] Checking for required tools"

if [[ "$ENVIRONMENT" == "development" ]]; then
  if ! [ -x "$(command -v docker)" ]; then
    error "docker" "https://docs.docker.com/get-docker/"
  fi
fi


if [[ "$ENVIRONMENT" == "development" ]]; then
  echo "[*] Instalando dependencias de api..."
  cd services/api && npm install && cd ../..

  echo "[*] Instalando dependencias de GraphQL..."
  cd services/api-graphql && npm install && cd ../..

  echo "[*] Instalando dependencias de React..."
  cd Epsilon-frontend && npm install && cd ../

    FICHERO=/docker-compose.yaml
    if [ -d "$FICHERO" ]
    then
    echo "El fichero ${FICHERO} existe"
    else
    echo "El fichero ${FICHERO} no existe"
    fi
  echo "[*] Ejecutando docker..."
  docker-compose up
fi



echo "--- Hecho ---"