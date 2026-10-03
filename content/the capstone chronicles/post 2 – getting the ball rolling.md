---
publish: "true"
title: "🙣 post 2: getting the ball rolling"
---
# technical problem statement
Horizontal-axis wind turbines (HAWTs) are the more prevalent form of wind turbine, often employed *en masse* in commercial wind farms. However, despite their relatively high efficiency (0.45-0.55), they come with trade-offs: namely, a large footprint (hub heights often ≥ 45 m, rotor diameters often exceeding 130 m) and low operational tolerance for turbulent/multidirectional flows. 

Enter vertical-axis wind turbines (VAWTs), which, despite their comparatively lower efficiency (0.15-0.42), occupy much less space (5 m tall, rotor diameters around 3.1 m) and are engineered to harness wind energy regardless of direction. Team Wind Waker seeks to design, fabricate, and optimize a scale model VAWT to a goalpost efficiency of 0.45 (the lower limit of HAWT efficiencies) in order to make the technology more amenable to urban/suburban deployment, thereby democratizing/decentralizing the means of energy production and making renewable power more cost-effective.

<figure>
  <img src="Different Turbines.png" 
       alt="Different kinds of vertical axis wind turbines (VAWT)" 
       style="width:100%">
  <figcaption>
    Fig. 1 — Different kinds of vertical axis wind turbines (VAWTs): (a) Savonius; (b) Darrieus with “egg beater” design rotor; (c) H-shape blades; (d) helix shape blades.
  </figcaption>
</figure>
# table of major constraints
<figure>
  <img src="TOMC 1.png" 
       style="width:95%">
</figure>

<figure>
  <img src="Betz's Law.png" 
       alt="Betz's Law illustration" 
       style="width:100%">
  <figcaption>
    Fig. 2 — Not all wind energy incident upon a wind turbine is not absorbed/converted into electricity. This concept is proven by Betz's Law.
  </figcaption>
</figure>
<figure>
  <img src="TOMC 2.png" 
       style="width:95%">
</figure>

$^*$Numerical quantifications to be added upon further research/investigation. A detailed literature review will be performed to assess typical values for each of the parameters above, and calculations will be performed to obtain their proportionally smaller scale model values as needed. 
# technical analysis
Before developing our design, we will conduct a field visit to analyze suburban wind speeds using an anemometer. Using this information, we will find the self-starting speed and turbulence intensity for our VAWT using accurate field working conditions. 

To develop and refine our conceptual design, we plan to use Computational Fluid Dynamics (CFD) with OpenFOAM CFD to analyze the energy absorption and blade area utilization in relation to our desired wind power density, finding the cut-in speed and ensuring it falls within our operational velocity range. Results of CFD analysis will also be used to assess the impact of geometric parameters such as tip speed ratio and solidity. 

We will also use finite element analysis (FEA) with COMSOL to understand the stresses placed on the rotor shaft/blades, defining the cut-out torque created by the blade without damage to the shaft to be calculated. Hand calculations will also be used to calculate the power output at determined wind conditions and verify whether the VAWT is operating as expected. 
# soft challenges
Some of the parts that we will need for the turbine will need to be manufactured either internally at UH in the machine shop or externally by a specific manufacturer depending on the requirements of the parts we need. Therefore, it will be imperative to ensure our schedule takes into account the time it will take for these parts to be made, as well as any delays that may occur due to scheduling issues or unexpected events. 

Furthermore, equipment acquisition for the validation phase needs to be decided on, as compatibility with our turbine as well as calibration of the sensors need to be taken into account in the pre-testing preparation. Lastly, wind tunnel testing scheduling needs to be sorted in advance. The wind tunnel is managed by Dr. Kelly Huang, who conducts experimental testing. Scheduling conflicts need to be considered when planning our time frame for the project. 
<figure>
  <img src="Wind Tunnel.png" 
       alt="Wind tunnel photo" 
       style="width:80%">
  <figcaption>
    Fig. 3 — A photo taken from inside the wind tunnel within Dr. Huang's/
    Dr. Yang's shared lab space.
  </figcaption>
</figure>
We have been recommended by our technical advisors for this project, Dr. Di Yang and Dr. Kelly Huang, to become more knowledgeable in VAWTs by reading peer-reviewed articles they recommended and becoming familiar with low-level concepts before the team starts to further define the project plan. Some of the authors they recommended reading from are Dr. John Dabiri, Dr. Daniel Araya, and Dr. Di Yang himself, specifically their articles about tip speed ratio, solidity, and gearboxes in VAWTs.



