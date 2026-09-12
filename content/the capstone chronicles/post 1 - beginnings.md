---
publish: "true"
title: "🙣 post 1: beginnings"
---
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

# references
[^1]: https://www.ecoflow.com/us/blog/vertical-wind-turbines-for-homes-pros-cons-output
[^2]: https://css.umich.edu/publications/factsheets/energy/wind-energy-factsheet
[^3]: https://www.energy.gov/cmei/wind/articles/wind-turbines-bigger-better
[^4]: https://energy-elege.com/wind-turbine-height-guide/
[^5]: https://www.sciencedirect.com/science/article/abs/pii/S095965262401429X
[^6]: https://www.luvside.de/en/hawt-advantage-disadvantage/
[^7]: https://www.solarreviews.com/blog/how-much-electricity-does-a-solar-panel-produce