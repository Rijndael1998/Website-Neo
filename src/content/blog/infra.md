If you're interested in how my network is structured, you can read more about it [here](:/4aec8153102e410b8a912960e2289501).

# ISP
My internet service provider gave me very vague instructions on how to set up my WAN connection, but after a bunch of searching online, I figured out [how to get OpenWRT to work on City Fiber networks](:/221cb66ba89c43cda6494345a2f2217f). If you're struggling and are with a City Fibre provider, this article is for you. Overall, it's a very simple process, it just lacks documentation.

# OpenWRT
I use [OpenWRT](https://openwrt.org/) as the router software running on my old computer. The old computer has a brand new 4 port 2.5 Gigabit [PCIe network card](https://www.amazon.co.uk/gp/product/B09SS8GVHC/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&th=1). It's only PCIe x4 and I only have 1 x16 and 2 x1 ports on [my motherboard](https://www.gigabyte.com/Motherboard/GA-B75M-D2V-rev-10#ov). It's a bit of an issue and I had to buy some switches to separate my networks out.

## Edge Server
Here's the current hardware setup as of today:

| Parameter | Value |
| --- | --- |
| Model | `Gigabyte Technology Co., Ltd. B75M-D2V` |
| Architecture | `Intel(R) Core(TM) i7-3770K CPU @ 3.50GHz` |
| Target Platform | `x86/64` |
| Firmware Version | `OpenWrt 23.05.0 r23497-6637af95aa / LuCI openwrt-23.05 branch git-23.236.53405-fc638c8` |
| Kernel | `Version 5.15.134` |
| RAM | `16GiB` |
| Storage Space | `256GB SSD` |

There's a couple issues with this hardware setup. I've got *wayyyy* too much storage space and ram. I currently use about 200MiB of RAM on a bad day. That's only about 2% of my total. However, my max concurrent connections are wild. I can max out at 262,144 connections. On a bad day, I only use 10,000 connections, which is about 4% of my total connection capacity.

If you have a computer that has some kind of storage device bigger than 256MiB, roughly 1GiB of RAM and a CPU^["[Anything from around 2007 onward](https://openwrt.org/docs/guide-user/installation/openwrt_x86)"]. I think my estimates are more than OpenWRT recommend themselves.

### Compatibility
 - For WiFi, I could not get my PCIe WiFi card to work in my set up. I tried the [TP-Link AX3000](https://www.amazon.co.uk/gp/product/B0B12ZC588/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) to work with it but the Wireless tab inside LuCI didn't work. At that point, I simply gave up and flashed my WiFi router with OpenWRT.

 - The PCIe 4 port 2.5 Gigabit card works fine out of the box and I didn't need to set it up or initialise it. I assume this will be with all natively Linux supported hardware. 

 - Everything else other than this works perfectly fine too, even the integrated CPU graphics worked since I got output on my display.

## Router
The router that I have is a [TP-Link Archer C6 v3](https://openwrt.org/toh/tp-link/archer_c6_v3). 

Here's the current hardware for the router:
| Parameter | Value |
| --- | --- |
| Model | `TP-Link Archer C6 v3` |
| Architecture | `MediaTek MT7621 ver:1 eco:3` |
| Target Platform | `ramips/mt7621` |
| Firmware Version | `OpenWrt 23.05.0 r23497-6637af95aa / LuCI openwrt-23.05 branch git-23.236.53405-fc638c8` |
| Kernel | `Version 5.15.134` |

The flash is a lot smaller than the SSD I have in my computer, this doesn't cause any issues however I'm somewhat limited by the packages that I can install. My current flash storage sits around 8.3MiB out of 8.75MiB^[That's 5% of storage left], which is close for comfort, but still no reason to worry.

My RAM usage is faring a lot better. I have 118MiB available and I'm using about 61MiB^[52%?]. Still a lot of headroom considering all the devices at home.

My max amount of connections appear to be 15,360 and I'm currently using only 20 of them with the entire family home.

### Compatibility
- One issue I had with this router was the fact that I had to select a different version than latest for this router because certain wireless things broke. I don't exactly remember what I did to make the router work but it works now.

- I found another bug that doesn't let you set up wireless access points after scanning the air with the router. It simply locks up and a reboot fixes it.

- I've found that disabling packet steering on this router works well and you can get huge boosts of speed by simply disabling this option. Of course, try this for yourself and do a speed test before and after to figure out if this is applicable to you.

## Knowledge shortfalls
There's a lot of things that I could have done better in my system if I knew and understood what I was doing.

I don't understand VLANs on a higher level. It seems to me that they're some kind of black magic. Because of this, I couldn't really get it to work nicely with the rest of my network. I'm not sure how I can set up a VLAN for wireless clients and use a single wire instead of two. For example, there's no option to do a wireless VLAN tagging which makes my whole idea bust.

I used two wires instead of one to make my network separated. 
![5df8c68b69c864f8a4a583148a93e751.png](:/d7f88b8f0d5a44e980d8f9fdc92ec607)
The 2 networks have their own bridge tied to their own ports. From the WiFi screen, I just selected the bridge and it added them on. The wires go to their respected switches.

# Server software
I use [XCP-ng](https://xcp-ng.org/) with the preconfigured [Xen Orchestra](https://xen-orchestra.com/#!/xoa).

## Issues
 - When you use [XCP-ng](https://xcp-ng.org/) with the default [Xen Orchestra](https://xen-orchestra.com/#!/xoa), you will not be able to perform updates.
  ![f3f78530aef10c3ad1493660b8185023.png](:/6f72634206224d279dd35da5a738f386)
  The very simple solution to this is to use the [community version](https://github.com/Jarli01/xenorchestra_installer). Its good enough to just update but I'm still unsure if I want to use this as a daily driver just yet.
 - The first time that I ran XCP-ng, I couldn't open LUKS2, only LUKS1 volumes. This was really annoying because I couldn't easily copy over my data that already existed.
 - I wanted to run [Folding @ Home](https://foldingathome.org/) on my graphics card attached to the host but there was a lot of issues getting that set up. I simply couldn't detect OpenCL on those cards. I'm not sure if it's because my cards are rather old and under-powered or if there's another reason for this. I wasn't able to find a solution to this so I only run Folding on my CPU.
 - At the time of writing there was no way to do USB passthrough on XO. I had to follow a tutorial that I found [here](https://www.techtutorials.tv/sections/xcp-ng/xcp-ng-usb-passthrough/).

## Why not a bare metal approach?
The reason for not using a bare metal machine running everything that I want is flexibility, backups and restores. Before, I worried that if one of my services died or something happened, everything would just blow up in my face. Now I don't have to worry if something goes wrong because I can always recover.

I could also control the resource use by every program. For example, my [Folding @ Home](https://foldingathome.org/) virtual machine has a high number of cores/threads but a low CPU priority, meaning that it will use only the remaining CPU resources from all the other higher priority virtual machines. The only downside to this approach is that you're also running the operating system and you have to allocate more ram to the virtual machine than necessary.  

# Topology
![drawio](:/54bf5d2a29bd4fe69922806cb29492c8)

```mermaid
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
```

Edge server is an old computer.
TP_Link is a wireless router.

I set up my router to act like a wireless switch. It will funnel the traffic from each respected SSID to their correct network and disallow cross talking. I used two separate cables to split the normal and untrusted traffic. I couldn't figure out how to set up VLANs so this was the way that I decided to do it.

## Access Chart
```mermaid
flowchart LR
	A[10.0.0.1/24 - Server Network] 
	B[WAN / Internet]
	C[192.168.1.0/24 - Normal Network]
	D[192.168.10.0/24 - Untrusted Network]
	A --> B
	C --> B
	A --> C
	A --> D
	C --> D
	
```

- Server network can access any other network.
- Normal network can only access the WAN and Untrusted network.
- Untrusted devices have no access to any network including the internet.

### Server network
The server network consists of bridged virtual machines and physical devices. It's protected so that only devices inside the network can connect to it. It has full reign over the network.

### Normal network
This network is the default network that my devices would connect to. This means devices that need access to the internet, and my family's wireless devices.

### Untrusted network
The untrusted network has devices that I would consider evil. They don't have any access to the internet and all of their activities can be accessed from the outside from the other networks. I primarily use this network to run my camera system. I cannot risk the cameras sending any data to the internet because of privacy.