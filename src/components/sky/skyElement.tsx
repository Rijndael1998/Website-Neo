"use client";
import { useEffect, useState } from "react";
import SkyElementRender from "./nodeElement";
import { V2 } from "./V2";

class SkyNode {
    constructor(
        public loc: V2,
        public mass: number = 10,
        public momentum: V2 = new V2(),
        public force: V2 = new V2(),
    ) { }

    addForce(v: V2) {
        this.force.add(v);
    }

    solve() {
        this.momentum.add(this.force.div(this.mass));
        this.force = new V2();
        this.loc.add(this.momentum);
    }

    // new() {
    //     return new SkyNode(
    //         this.loc.new(),
    //         this.mass,
    //         this.momentum.new(),
    //         this.force.new()
    //     )
    // }
}

class SkyNodeLink {
    constructor(public n1: SkyNode, public n2: SkyNode, public t: number = 50) { }

    solve() {
        const diff = this.n1.loc.new().sub(this.n2.loc.new());
        const dist = diff.dis(new V2());

        const theta = Math.atan(diff.x / diff.y);

        const force = (dist - this.t) / 256;

        const vf1 = new V2(
            force * Math.sin(theta),
            force * Math.cos(theta),
        )

        const vf2 = new V2(
            force * Math.sin(theta - Math.PI),
            force * Math.cos(theta - Math.PI),
        )

        console.log(dist);

        this.n1.addForce(vf1);
        this.n2.addForce(vf2);
    }

    // new() {
    //     return new SkyNodeLink(this.n1.new(), this.n2.new(), this.t)
    // }
}

class SkyNodeSimulation {
    skyLink: Array<SkyNodeLink>;

    constructor(skyLink?: Array<SkyNodeLink>) {
        const a = new SkyNode(new V2(250, 250));
        const b = new SkyNode(new V2(290, 240));
        const c = new SkyNode(new V2(280, 253));

        this.skyLink = skyLink === undefined ? [
            new SkyNodeLink(a, b),
            new SkyNodeLink(a, c),
            new SkyNodeLink(b, c),
        ] : skyLink;
    }

    step() {
        //const newSimState = this.new();
        const nodes = new Set<SkyNode>();
        const nodeArray = new Array<SkyNode>();

        // calculate forces
        this.skyLink.forEach((link) => {
            link.solve();
            nodes.add(link.n1);
            nodes.add(link.n2);
        });

        nodes.forEach((node) => {
            node.solve();
            nodeArray.push(node);
        });
        
        // console.log(nodeArray);

        return [this, nodeArray] as [SkyNodeSimulation, Array<SkyNode>];
    }

    // new() {
    //     return new SkyNodeSimulation(
    //         this.skyLink.map((node) => node.new()),
    //     )
    // }
}

export default function SkyElement() {

    const [sim, setSim] = useState<SkyNodeSimulation>(new SkyNodeSimulation());
    const [nodes, setNodes] = useState<Array<SkyNode>>(new Array());

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("step", sim)
            //const [newSim, newNodes] = sim.step();
            //setNodes(newNodes);
            // setSim(newSim);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [sim]);

    return <>
        {
            nodes.map((node: SkyNode, i: number) => {
                return <SkyElementRender key={i} m={20} x={node.loc.x} y={node.loc.y} extra={node.momentum.toString()} />
            })
        }
    </>

}