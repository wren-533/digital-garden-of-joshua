---
publish: "true"
---
> [!abstract] The inspiration for this piece
> This summer, I had the opportunity to take arguably one of the most interesting courses of my undergraduate schooling. The monthlong course, named Biofluid Dynamics, was structured such that for the first two weeks, we reviewed key fluid mechanics principles: think Navier-Stokes, Hagen-Poiseuille, stress tensors, etc. The second two weeks was a deep dive into human anatomy: the architecture of the heart, the composition/flow of blood through the vasculature, cardiovascular pathologies and their treatment, and how fluid mechanics is essential in understanding the nuances of these concepts. 
> 
> As somebody who has taken but one introductory level biology course in high school, it may not come as a surprise that I found the second half much more daunting than the first. Luckily I was blessed with a great professor—an adjunct who teaches at UTHealth Houston, no less—whose passion for the subject was infectious. [Dr. Chivukula](https://med.uth.edu/internalmedicine/2025/10/08/venkat-keshav-chivukula-phd/) was an ideal instructor, with a mechanical engineering background, Ph.D. in biomedical engineering, and postdoctoral clinical experience.
> 
> Biofluid Dynamics was hardly a course I ever expected to take as one pursuing a B.S. in Mechanical Engineering, but most definitely one of the most fascinating, once again proving the seemingly boundless applications of this discipline.

One of the most interesting portions of this course for me centered around a discussion of the *Windkessel model*, which essentially provides a framework for analyzing the human cardiovascular system through the lens of another—circuits. While we might be tempted to call out the differences between the two, there are surprising surface-level points of commonality:
1. Both are closed loop conducting paths.
2. Both involve the flow of some medium—blood, in the case of the cardiovascular system, and current (the flow of charge/electrons) in the case of circuits.
3. Both possess some source of energy (battery, for example, vs. heart) and load (light bulb, for example, vs. systemic cells).

The "energy source" is effectively a voltage source in a circuit and a pressure source in the cardiovascular system. The effectiveness of the analogy is further strengthened by the fact that both voltage and pressure require a datum: there exists no solitary voltage at a point, independent of a reference point the way that pressure is always taken with respect to 0 (absolute) or atmospheric pressure (gauge). In this sense, every nominal $V$ is actually a $\Delta V$, and every $P$ is actually a $\Delta P$.

We additionally know that circuits contain components known as resistors, which generate electrical resistance ($R_{\mathrm{e}}$) that opposes the flow of electric current. Sure enough, there is a cardiovascular analogue: cardiovascular resistance ($R_{\mathrm{cv}}$), arising from internal friction intrinsic to blood (i.e. viscosity), vessel length, and cross sectional area, opposes the flow of blood.

Then what of the flow itself? Not the force driving it nor the factors resisting it, but the actual rate of media movement? For circuits, this takes the form of current $I$, which itself is actually the first time derivative of charge $dq/dt$. In the cardiovascular system, volumetric flow rate $Q$ is the first time derivative of volume $dV/dt$ or $\dot{V}$. 

With this framework in place, it is easy to see how Ohm's Law—one of the cornerstone relations of circuit analysis—could also be applied to the cardiovascular system. Ohm's Law is given by
$$
V = IR_{\mathrm{e}}.
$$
Consider the cardiovascular analogues to these parameters: 
$$
\begin{cases} 
V \equiv \Delta P \\ 
I \equiv Q \\
R_{\mathrm{e}} \equiv R_{\mathrm{cv}}
\end{cases}
$$
Now, writing out in terms of the mapped parameters:
$$
\Delta P =  QR_{\mathrm{cv}},
$$
where resistance is given by
$$
R = \frac{\Delta P}{Q} = \frac{8\mu L}{\pi R^4}.
$$

This is not the end of the story, however: *Windkessel* loosely translates from German to "air chamber" in English, but is understood to mean "elastic reservoir". The Windkessel effect describes the phenomenon by which arterial distensibility (/compliance/capacitance)—in other words, by how much the aorta and elastic arteries can distort and stretch—leads to blood accumulation in the additional volume when the vessels are distended and continuous blood flow when the vessels recoil, even if the heart is in diastole. This is illustrated by the video linked below:

![](https://www.youtube.com/watch?v=M5Te5S-qjIU)

This gives us yet another parameter to play with in our cardiovascular system-circuit analogy—distensibility (or the circuits term you might be more familiar with, capacitance)! For a circuit, $C = q/V$, whereas for the cardiovascular system, $C = \Delta V / \Delta P$. In circuits, capacitors store charge relative to voltage whereas in the cardiovascular system, elastic blood vessels store blood relative to pressure.

Now that we know the cardiovascular system has at least a resistive and capacitive element, it's not all that crazy anymore to say that we can model it as a circuit—specifically, an RC circuit. We call this a 2-element Windkessel model. 

<img src="RC Circuit Schematic.png" width="300px" style="display:block; margin:auto;">

The equation for the circuit above is given by
$$
I(t) = \frac{V(t)}{R_{\mathrm{e}}} + C \frac{dV(t)}{dt}.
$$
Substituting the appropriate parameters for the cardiovascular system,
$$
Q(t) = \frac{P(t)}{R_{\mathrm{cv}}}+C \frac{dP(t)}{dt}.
$$
Now, we rearrange to form a linear differential equation in pressure:
$$
\frac{dP(t)}{dt}+\frac{P(t)}{R_{\mathrm{cv}}C}=\frac{Q(t)}{C}.
$$
If we apply the appropriate initial conditions for both systole and diastole, we can obtain time-variant pressure equations for each case!

You would be right to question the simplicity of this model: surely something so complex and sensitive as the human cardiovascular system couldn't be modeled with just an RC circuit, right? The elegance of the Windkessel model, however, lies in its modularity: researchers have been experimenting with adding additional elements like an extra resistor (3-element) to factor in valve resistance acting on blood exiting the heart or even an inductor (4-element) to account for the fluid inertia. The best models, in my opinion, are those that are amenable to change and refinement: Windkessel certainly fits the bill.

There is so much beauty in engineering and the applied sciences. For us to be able to take a law from electricity and magnetism, extrapolate it to fluid mechanics, and use it as a mode of analysis of the very bodily systems that facilitate our endeavors is nothing short of amazing. It gets me thinking about what new findings and discoveries lie within the overlap of other disciplines.
# sources
1. [Solving Windkessel Models with MLAB](https://civilized.com/mlabexamples/windkesmodel.htmld/)
2. [[Chapter7_Unsteady_Flow_Models_Windkessel.pdf|My lecture notes from biofluid dynamics!]]
