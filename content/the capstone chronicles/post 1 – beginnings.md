---
publish: "true"
published: 2026-09-11
modified: 2026-11-12
title: "🙣 post 1: beginnings"
---
# start here
Welcome to The Capstone Chronicles! My name is Joshua (the owner of this site) and I started this series of blog posts both to fulfill the course requirements for my mechanical engineering capstone and document progress made towards our project (which I frankly think is really awesome). I see these posts as more than just assignments, but a way to document my last year of undergrad. 

I am grateful to have had the opportunity to work with my fellow mechanical engineering majors and good friends, Arturo, Miguel, and Maylee. Together with our technical advisors Drs. Kelly Huang and Di Yang, we are Team Wind Waker.  I hope you enjoy reading these posts as much as I enjoyed making them.
# team introductions
[Arturo Aguilar](https://www.linkedin.com/in/arturo-aguilar-1028-/) is a senior mechanical engineering student at the University of Houston. He brings a strong skill set focused on SolidWorks CAD, complex 3D printing, and hands on electromechanical assembling. Through personal projects, ranging from soldering on and retrofitting vintage consoles to executing elaborate suspension and small engine modifications on his truck, he has developed the aforementioned skills. His background in troubleshooting hardware and custom fabrication have taught him to be versatile, managing new problems and concepts with confidence and high proficiency. He will serve as <u>drafting lead</u> for Team Wind Waker.

[Miguel Blanco, EIT](https://www.linkedin.com/in/miguelblanco2325) is a senior mechanical engineering undergraduate student whose principal strengths include extensive knowledge in SolidWorks and 3D printing. He developed these skills through his work at Carnegie Mellon University, designing and manufacturing a 3D-printed soft robotic prosthetic hand for the UH BRAIN Lab, designing and manufacturing 3D-printed cuffs for an exoskeleton for children with cerebral palsy, and working as an Undergraduate Instructional Assistant, fulfilling different 3D printing orders and assisting students in developing bespoke solutions over the course of their Design-Build-Test (DBT) projects. Although he does not have specific experience with turbine design, his previous work has taught him to adapt to new problems and topics. He will serve as <u>technical lead</u> for Team Wind Waker.

[Maylee Madrid](https://www.linkedin.com/in/mayleemadrid/) is a senior mechanical engineering undergraduate student. She has strong teamwork and time management skills from her position as Marketing Chair in the American Society of Mechanical Engineers (ASME) and her previous position as Fundraising intern and Media Team member in the Society of Asian Scientists and Engineers. She has experience in generating AutoCAD drawings and extensive knowledge of Harris County building standards from her time as a Traffic Operations and Engineering intern at the Office of the County Engineer. She also has experience in presenting engineering topics in a clear and concise manner from her time as a MAE Pathways Mentor. She will serve as <u>test engineer</u> for Team Wind Waker.

[Joshua Peter, EIT](https://www.linkedin.com/in/joshua-peter-uh/) is a senior mechanical engineering undergraduate student holding experience in people management (2 years as a senior/managing barista) and project management (served as PM for his MECE 2361 Design-Build-Test project team). He has spearheaded operational efficiency initiatives and has gained valuable leadership experience in his tenure as Vice President Operations with ASME-UH. Currently interning for Schweitzer Engineering Laboratories in a civil/structural capacity, his experience with structural analysis programs like RISA 3D and standards like ASCE 7 will prove useful in simulating design environmental loads on VAWT models. He brings a strong background in technical writing and LaTeX typesetting. He will serve as <u>project manager</u> for Team Wind Waker.

[Dr. Kelly Huang](https://www.me.uh.edu/faculty/huang-kelly) is the Kalsi Assistant Professor of Mechanical & Aerospace Engineering at the University of Houston. She heads the ATLAS (Applied Turbulent and Land-Atmosphere Systems) lab group at the same institution. Her research interests include environmental fluid mechanics‚ turbulence‚ sensing techniques‚ surface-atmosphere interactions‚ and boundary-layer meteorology. She will serve as a <u>technical advisor</u> for Team Wind Waker.

[Dr. Di Yang](https://www.me.uh.edu/faculty/yang-di) is concurrently the Associate Department Chair and Associate Professor of the Department of Mechanical & Aerospace Engineering at the University of Houston. He heads the Computational Fluid Dynamics and Turbulence Modeling Group at the same institution. His research interests include computational fluid dynamics, turbulent flows over complex boundaries, subgrid-scale modeling in geophysical flows, sustainable energy, environmental fluid mechanics, ocean optics, and scientific computing. He will serve as a <u>technical advisor</u> for Team Wind Waker.
# motivation
Contemporary vertical-axis wind turbines (VAWTs) operate at limited efficiency, averaging about 10-17% for Savonius models and 30-40% for the less prevalent Darrieus models[^1]. In comparison to the industry standard, horizontal-axis wind turbines (HAWTs)—responsible for producing 10.4%[^2] of the operating electric generating capacity in the U.S.—operate at a higher 40-50% efficiency. As such, VAWTs are considered non-viable for commercial energy generation and don’t see widespread use. However, VAWTs possess two significant advantages over HAWTs, which are the fact that they are direction-agnostic (1)—they can produce power regardless of which way the wind is flowing—and that they occupy a much smaller spatial footprint (2).
<figure>
  <img src="Different Turbines.png" 
       alt="Different kinds of vertical axis wind turbines (VAWT)" 
       style="width:100%">
  <figcaption>
    Fig. 1 — Different kinds of vertical axis wind turbines (VAWTs): (a) Savonius; (b) Darrieus with “egg beater” design rotor; (c) H-shape blades; (d) helix shape blades.
  </figcaption>
</figure>

In improving the performance of VAWTs, our team, Wind Waker, hopes to democratize and decentralize the means of energy production, equipping individuals in both remote and urban areas with access to clean, renewable power.

# problem statement
HAWTs are a common source of renewable energy. While they are useful when implemented *en masse* in large-scale wind farms, they present issues when they are used in environments where wind flowpaths are turbulent (such as cities), as their output depends on flow direction. Furthermore, hub heights for HAWTs regularly exceed 150 ft[^3], occupying much vertical and lateral airspace. In urban environments where the physical constraints of HAWTs render them impractical, VAWTs could be a reasonable substitute as they can generate power regardless of wind direction and can be installed much closer to the ground, with a standard height of 2-3 meters[^4] for residential use, while occupying less lateral space. Turbine efficiency is quantified using a metric known as the *power coefficient* ($C_p=P_{\mathrm{out}}/P_\mathrm{in}$). For VAWT technology to be viable for practical implementation, it is imperative to bolster power coefficient. One possible way by which we could achieve higher efficiency is by modifying the blade helicity to better leverage generated wind shear layers and prevent wake self-interference. 

<figure>
  <img src="Blade Helical Model.jpg" 
       alt="Different kinds of vertical axis wind turbines (VAWT)" 
       style="width:100%">
  <figcaption>
    Fig. 2 — The blade helical model, depicting the geometric differences arising from changes in blade helicity.
  </figcaption>
</figure>

Furthermore, modifying the pitch angle of the turbine blades could also increase device efficiency. Analysis pertaining to the arrangement of multiple turbines in a limited footprint could also be undertaken to see whether wake effects could be used to compound power output. To mimic real-life conditions, it would be necessary to analyze the performance of different blade designs against standard wind conditions in urban areas (5-6 m/s)[^5] and scale these parameters from a real VAWT to a model (using the principles of fluid similitude) to properly determine the best characteristics for the blade. The end goal of these modifications is to increase the efficiency of VAWTs to that of HAWTs (40-50%, on average[^6]), with an approximate output of 36 kWh a day—the energy a standard U.S household needs[^7]. 

<figure>
  <img src="Turbine Aerodynamics.webp" 
       alt="Different kinds of vertical axis wind turbines (VAWT)" 
       style="width:100%">
  <figcaption>
    Fig. 3 — (a) Schematic representation of an H-type vertical axis turbine with radius R viewed from above. The force direction convention used in this study is represented by the positive direction of the radial force FR, azimuthal force Fθ, and pitching moment around the quarter-chord Mz. (b) Zoomed-in view of the velocity triangle at the blade level showing the blade velocity ΩR, the wind velocity U∞, and the resulting effective velocity Ueff as well as the effective angle of attack αeff and pitch angle αpitch. (c) Variation of the effective angle of attack αeff as a function of the blade’s azimuthal position θ for different tip-speed ratios. (d) Variation of the effective flow velocity Ueff seen by the turbine blade as a function of the blade’s azimuthal position θ for different tip-speed ratios. The amplitude and asymmetry of the variations in effective angle of attack and effective velocity increase with decreasing tip-speed ratio λ. For tip-speed ratios below λ ≈ 3, the magnitude of the effective angle of attack exceeds the static stall angle of attack αss, indicated with a dashed line in (c).
  </figcaption>
</figure>

# anticipated obstacles
## 1. maintaining project scope
The main obstacle we anticipate facing is ensuring that the project doesn’t become research-focused and exploratory, but rather focusing on using current literature to support our development of a more efficient VAWT. 

## 2. stability under loading
Material choice won’t be one of the main focuses of the project, but material properties are fundamental physical constraints that we will need to consider in order to ensure the scale model can withstand experimental wind loads. Sturdiness, total weight, and blade flexibility are all factors that must be accounted for when deciding on material.

## 3. data collection/processing
We also foresee data collection/processing being an obstacle since our team has limited experience with computational fluid dynamics software and analyzing data from the scale models using this software. However, we have the support of two professors with expertise in this area that we will be able to consult. 

## 4. fabrication
Integral to the design solution is the precise manufacturability and assembly of the parts and models we will use. All of the parts need to have tight tolerances to ensure rotation and wind interaction maximize the efficiency of the machine.

[^1]: https://www.ecoflow.com/us/blog/vertical-wind-turbines-for-homes-pros-cons-output
[^2]: https://css.umich.edu/publications/factsheets/energy/wind-energy-factsheet
[^3]: https://www.energy.gov/cmei/wind/articles/wind-turbines-bigger-better
[^4]: https://energy-elege.com/wind-turbine-height-guide/
[^5]: https://www.sciencedirect.com/science/article/abs/pii/S095965262401429X
[^6]: https://www.luvside.de/en/hawt-advantage-disadvantage/
[^7]: https://www.solarreviews.com/blog/how-much-electricity-does-a-solar-panel-produce