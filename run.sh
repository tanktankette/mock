#!/bin/bash

cd front
npm start &
cd ../back
mix phx.server
