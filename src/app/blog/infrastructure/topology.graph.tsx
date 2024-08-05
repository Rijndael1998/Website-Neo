import MermaidFlow from '@/components/flow/MermaidFlow';
import React from 'react';

const txt = `
flowchart LR
  ISP[WAN]
  ES[Edge Server]
  SDS[Server Device Switch]
  NDS[Normal Device Switch]
  UDS[Untrusted Device Switch]
  TPL[TP_Link\n Wireless Access Point]
  VM1[[Virtual Machines & Servers...]]
  NWD[[Normal Wired Devices...]]
  ND[[Normal Wireless Devices...]]
  UD[[Untrused Wireless Devices...]]
  
  ISP --> ES
  ES -->|192.168.10.0/24| UDS
  ES <-->|192.168.1.0/24| NDS
  ES <-->|10.0.0.0/24| SDS
  SDS <-->|10.0.0.0/24| VM1
  
  NDS <-->|192.168.1.0/24| TPL
  NDS <-->|192.168.1.0/24| NWD
  
  UDS <-->|192.168.10.0/24| TPL
  
  TPL <-.->|SSID: Untrusted\n192.168.10.0/24| UD
  TPL <-.->|SSID: Normal\n192.168.1.0/24| ND

`


export default function layoutFlow() {
  return <MermaidFlow mermaidFlow={txt} />
}