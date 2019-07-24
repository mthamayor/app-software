import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import OpenDrainage from '../assets/img/open-drainage.jpg';
import RainPollutant from '../assets/img/rain-pollutant.jpg';
import PollutedWater from '../assets/img/polluted-water.jpg';
import SewageTreatmentSystems from '../assets/img/sewage-treatment-system.jpg';
import LeadContaminatedSoil from '../assets/img/lead-contaminated-soil.jpg';
import ScreenChamber from '../assets/img/screen-chamber.jpg';
import PercolatingFilter from '../assets/img/percolating-filter.jpg';
import SewageTreatmentMethods from '../assets/img/sewage-treatment-methods.jpg';
import WastewaterPondSystem from '../assets/img/wastewater-pond-system.jpg';
import LivestockFarm from '../assets/img/livestock-farm.jpg';

const EnvPollution = () => {
  return (
    <div className='p-3'>
      <div className='text-center'>
        <h3>ENVIRONMENTAL POLLUTION</h3>
      </div>
      <p>
        <strong className='ml-3'>Environment</strong> can be rightly referred in
        a general sense to as the totality of space, time and socio-cultural
        settings of man and other living organisms therein.{' '}
      </p>
      <p>
        <strong className='ml-3'>Environmental Pollution</strong> is any
        discharge of material or energy into water, land, or air that causes or
        may cause acute (short-term) or chronic (long-term) detriment to the
        Earth's ecological balance or that lowers the quality of life.
      </p>
      <p>
        <strong className='ml-3'>Pollutants</strong> may cause primary damage,
        with direct identifiable impact on the environment, or secondary damage
        in the form of minor perturbations in the delicate balance of the
        biological food web that are detectable only over long time periods. The
        industrialization of our society, the introduction of motorized
        vehicles, and the explosion of the human population, have caused an
        exponential growth in the production of goods and services. Coupled with
        this growth has been a tremendous increase in waste byproducts. The
        indiscriminate discharge of untreated industrial and domestic wastes
        into waterways, the spewing of thousands of tons of particulates and
        airborne gases into the atmosphere, the "throwaway" attitude toward
        solid wastes, and the use of newly developed chemicals without
        considering potential consequences have resulted in a lot of
        environmental disasters throughout the world.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={OpenDrainage} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 1</strong> Open Drains
      </Typography>
      <p>
        <span className='pl-3' />
        Environmental pollution usually occurs as a result of energy conversions
        and the use of resources which leaves their by-products behind in water,
        soil or air. Technology has begun to solve some pollution problems, and
        public awareness of the extent of pollution will eventually make
        government bodies to be more proactive rather than reactive and also
        undertake more effective environmental planning and adopt more effective
        antipollution measures.
      </p>
      <h4 className='text-uppercase text-center'>TYPES OF POLLUTION</h4>
      <p>
        The following are the types of pollution perceived in our environment:
      </p>
      <ul>
        <li>Water pollution</li>
        <li>Land pollution</li>
        <li>Noise pollution</li>
        <li>Air pollution</li>
      </ul>
      <h5 className='text-center text-uppercase'>WATER POLLUTION</h5>
      <p>
        <span className='pl-3' />
        Water pollution is the introduction into fresh or ocean waters of
        chemical, physical, or biological material that degrades the quality of
        the water and affects the organisms living in it. This process ranges
        from simple addition of dissolved or suspended solids to discharge of
        the most insidious and persistent toxic pollutants (such as pesticides,
        heavy metals, and non-degradable, bio accumulative, chemical compounds).
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={RainPollutant} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 2</strong> Rain Water Picking Up Pollutants
      </Typography>
      <p>
        The pollutants responsible for polluting waters can be grouped under
        conventional and non-conventional.
      </p>
      <h6 className='text-uppercase'>Conventional</h6>
      <p>
        <strong className='ml-3'> Conventional</strong> or
        <strong> classical pollutants</strong> are generally associated with the
        direct input of (mainly human) waste products. Rapid urbanization and
        rapid population increase have produced sewage problems because
        treatment facilities have not kept pace with need. Untreated and
        partially treated sewage from municipal wastewater systems and septic
        tanks in unsewered areas contribute significant quantities of nutrients,
        suspended solids, dissolved solids, oil, metals (arsenic, mercury,
        chromium, lead, iron, and manganese), and biodegradable organic carbon
        to the water environment. Conventional pollutants may cause a myriad of
        water pollution problems. Excess suspended solids block out energy from
        the Sun and thus affect the carbon dioxide-oxygen conversion process,
        which is vital to the maintenance of the biological food chain. Also,
        high concentrations of suspended solids silt up rivers and navigational
        channels, necessitating frequent dredging. Excess dissolved solids make
        the water undesirable for drinking and for crop irrigation.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={PollutedWater} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 3</strong> An unprotected spring polluted
      </Typography>
      <p>
        <span className='mr-3' />
        Although essential to the aquatic habitat, nutrients such as nitrogen
        and phosphorus may also cause over-fertilization and accelerate the
        natural aging process of lakes. This acceleration in turn produces an
        overgrowth of aquatic vegetation, massive algal blooms, and an overall
        shift in the biologic community--from low productivity with many diverse
        species to high productivity with large numbers of a few species of a
        less desirable nature. Bacterial action oxidizes biodegradable organic
        carbon and consumes dissolved oxygen in the water. In extreme cases
        where the organic-carbon loading is high, oxygen consumption may lead to
        an oxygen depression: (less than 2 mg/l compared with 5 to 7 mg/l for a
        healthy stream) is sufficient to cause a fish kill and seriously to
        disrupt the growth of associated organisms that require oxygen to
        survive. Water hyacinth and other floating aquatic vegetation is a
        consequence of this pollution.
      </p>
      <h6 className='text-uppercase'>Non-conventional</h6>
      <p>
        <span className='mr-3' />
        <strong>The non-conventional pollutants</strong> include dissolved and
        particulate forms of metals, some of them highly toxic and may
        accumulate in fish. More than <strong>13,000</strong> oil spills of
        varying magnitude occur in the United States each year.
      </p>
      <p>
        Thousands of environmentally untested chemicals are routinely discharged
        into waterways; an estimated 400 to 500 new compounds are marketed each
        year. Nonconventional pollutants vary from biologically inert materials
        such as clay and iron residues from building and demolishing wastes to
        the most toxic and insidious materials such as halogenated hydrocarbons
        (DDT, kepone, mirex, and polychlorinated biphenyls--PCB). The latter
        group may produce damage ranging from acute biological effects (complete
        sterilization of stretches of waterways) to chronic sub-lethal effects
        that may go undetected for years.
      </p>
      <p>
        The chronic low-level pollutants are proving to be the most difficult to
        correct and abate because of their ubiquitous nature and chemical
        stability.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img
            className='img img-fluid'
            src={SewageTreatmentSystems}
            alt='img'
          />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 4</strong> Sewage Treatment Systems
      </Typography>
      <h5 className='text-uppercase text-center'>CONTROL OF WATER POLLUTION</h5>
      <p>
        Waste water discharges are most commonly controlled through effluent
        standards and discharge permits. Under this system, discharge permits
        are issued with limits on the quantity and quality of effluents.
        Water-quality standards are sets of qualitative and quantitative
        criteria designed to maintain or enhance the quality of receiving
        waters. Criteria can be developed and implemented to protect aquatic
        life against acute and chronic effects and to safeguard humans against
        deleterious health effects, including cancer. Sewage or wastewater
        should be treated before it is discharged into the river or ocean. This
        is possible through modern technologies.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={ScreenChamber} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 5</strong> Screen chamber
      </Typography>
      <p>
        Sewage is first passed through series of steps: <br />
        screens, comminutor, grit chamber, and settling tanks. Up to this stage,
        the process is called primary treatment. Once the primary treatment is
        completed, sewage is purified by about 30 per cent. To achieve almost
        99.9 percent purification, the sewage has to be treated by secondary or
        biological treatment. In Nigeria there are about 26 sewage treatment
        plants but none of them functioning satisfactorily. Abuja alone has
        about 11 mini-sewage treatment plants. But only one at WUPA is working
        at 30 per cent capacity.
      </p>
      <p>
        Trickling or percolating filters, activated sludge process, waste
        stabilization plants, water hyacinth ponds, reed bed or root zone
        technologies are the methods available. For tertiary treatment, methods,
        such as chlorination, evaporation, and exchange absorption may be
        employed. These depend upon the required quality of the final treatment.
      </p>
      <p>Nigeria has to go a long way in the treatment of sewage.</p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={PercolatingFilter} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 6</strong> Trickling Filter or Percolating Filter
      </Typography>
      <p>
        Apart from the above mentioned conventional and unconventional methods,
        the following practices should also be adopted:
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img
            className='img img-fluid'
            src={SewageTreatmentMethods}
            alt='img'
          />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 7</strong> Sewage Treatment Methods
      </Typography>
      <ol>
        <li>
          Waste food material, paper, decaying vegetables and plastics should
          not be thrown into the open or underground drains
        </li>
        <li>
          Effluents with high organic content and slurries from distilleries and
          industries should be sent to biogas plants for generation of energy
        </li>
        <li>
          Oil slicks should be skimmed off from the surface with oil separators
          or suction devices. Sawdust may be spread over oil slicks to absorb
          the oil components and then the material is incinerated
        </li>
      </ol>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={WastewaterPondSystem} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 8</strong> Advanced Integrated Wastewater Pond System
      </Typography>
      <h5 className='text-center text-uppercase'>LAND POLLUTION</h5>
      <p>
        Land is often used as a recipient for treatment of wastes. Land also
        receives waste spills. Land pollution is the degradation of the earth's
        land surface through misuse of the soil by poor agricultural practices,
        mineral exploitation, industrial waste dumping, and indiscriminate
        disposal of urban wastes.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={LivestockFarm} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 9</strong> Livestock Farm
      </Typography>
      <h5>Soil Misuse</h5>
      <p>
        Soil erosion - a result of poor agricultural practices - removes rich
        humus topsoil developed over many years through vegetative decay and
        microbial degradation and thus strips the land of valuable nutrients for
        crop growth. Strip mining for minerals and coal lays waste thousands of
        acres of land each year, denuding the Earth and subjecting the mined
        area to widespread erosion problems. The increase in urbanization due to
        population pressure presents additional soil-erosion problems; sediment
        loads in nearby streams may increase as much as 500 to 1,000 times over
        that recorded in nearby undeveloped stretches of stream. Soil erosion
        not only despoils the Earth for farming and other uses, but also
        increases the suspended-solids load of the waterway. This increase
        interferes with the ecological habitat and poses silting problems in
        navigation channels, inhibiting the commercial use of these waters. Soil
        erosion is a major problem affecting some states in Nigeria. To name a
        few, Anambra, Imo, Akwa Ibom and others in southern side are badly
        affected leading to gully erosion and loss of land area. There is need
        for the Government to address this through organized tree planting and
        controlling erosion through sound engineering techniques.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={LeadContaminatedSoil} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='mt-2 mb-2 text-center'>
        <strong>Plate 10</strong> Phytoremediation of Lead Contaminated Soils
      </Typography>
      <h5>Solid Waste</h5>
      <p>
        In the United States in 1988 municipal wastes alone--that is, the solid
        wastes sent by households, business, and municipalities to local
        landfills and other waste-disposal facilities equaled 163 million metric
        tons (1980 million U.S. tons), or 18 k (40lb) per person, according to
        figures released by the Environmental Protection Agency. Additional
        solid wastes accumulate from mining, industrial production, and
        agriculture. Although, municipal wastes are the most obvious, the
        accumulations of other types of waste are far greater, in many instances
        are more difficult to dispose of, and present greater environmental
        hazards
      </p>
      <p>
        In Nigeria, municipal, industrial and hazardous wastes are a major
        concern and every government is handicapped in dealing with them. The
        most common and convenient method of disposing of municipal solid wastes
        is in the sanitary landfill. Sanitary landfills provide better aesthetic
        control and should be odourfree. Often, however, industrial wastes of
        unknown content are commingled with domestic wastes. Groundwater
        infiltration and contamination of water supplies are common.
      </p>
      <p>
        There is need for building engineered landfills besides waste reuse and
        recycling to reduce the waste going to landfills and to increase the
        life of the landfills. Besides landfills, solid wastes may be managed
        through other technologies, viz. incineration for medical and hazardous
        wastes, waste to energy, composting of organic wastes, biogas from
        livestock and slaughterhouses, and more advanced technologies to manage
        radioactive and highly toxic wastes. Recycling of materials is practical
        to some extent for much municipal and some industrial wastes, and a
        small but growing proportion of solid wastes are being recycled. When
        wastes are commingled, however, recovery becomes difficult and
        expensive. New processes of sorting ferrous and nonferrous metals,
        paper, glass, and plastics have been developed, and many communities
        with recycling programs now require refuse separation. Crucial issues in
        recycling are devising better processing methods, inventing new products
        for the recycled materials, and finding new markets for them
      </p>
      <h5>PESTICIDES AND BIOCIDES</h5>
      <p>
        These are organic and inorganic chemicals originally invented and first
        used effectively to better the human environment by controlling
        undesirable life forms such as bacteria, pests, and foraging insects.
        Their effectiveness, however, has caused considerable pollution. The
        persistent, or hard, pesticides, which are relatively inert and
        non-degradable by chemical or biologic activity, are also
        bio-accumulative; that is, they are retained within the body of the
        consuming organism and are concentrated with each ensuing level of the
        biologic food chain. For example, DDT provides an excellent example of
        cumulative pesticide effects. (Although DDT use has been banned in the
        United States since 1972, and in Nigeria more recently, it is still a
        popular pesticide in much of the rest of the world.) Its continued use
        in several countries results in ingestion by higher forms of life:
        algae, fish, shellfish, birds, or humans. The resultant increased
        concentration in the higher life forms (bio-enhancement) may reach
        levels of thousands to millions of parts per billion. Pesticides affect
        birds nesting habits and nervous system of animals and fish; they can
        cause instability, disorientation, and, in some cases, death. These
        examples are generally a result of relatively high body residuals
        producing acute (short-term) readily recordable results. The long-term
        (chronic) effects of persistent pesticides are virtually unknown, but
        many scientists believe that they are as much an environmental hazard as
        are the acute effects. Non-persistent (readily degradable) pesticides or
        substitutes, insect sterilization techniques, hormone homologues that
        check or interfere with maturation stages, and introduction of animals
        that prey on the pests present a potentially brighter picture for pest
        control with significantly reduced environmental consequences.
      </p>
      <h5 className='text-center text-uppercase'>NOISE POLLUTION</h5>
      <p>
        Noise pollution has a relatively recent origin. It is a composite of
        sounds generated by human activities ranging from blasting stereo
        systems to the roar of supersonic transport jets. Although, the
        frequency (pitch) of noise may be of major importance, most noise
        sources are measured in terms of intensity, or strength of the sound
        field.
      </p>
      <p>
        The standard unit, one decibel(dB), is the amount of sound that is just
        audible to the average human. The decibel scale is somewhat misleading
        because it is logarithmic rather than linear; for example, a noise
        source measuring 70 dB is 10 times as loud as a source measuring 60 dB
        and 100 times as loud as a source reading 50dB. Noise may be generally
        associated with industrial society, where heavy machinery, motor
        vehicles, and aircraft have become everyday items. Noise pollution is
        more intense in the work environment than in the general environment,
        although ambient noise increased an average of one dB per year during
        the 1980s.
      </p>
      <p>
        The average background noise in a typical home today is between 40 and
        50 decibels. Some examples of high-level sources in the environment are
        heavy trucks (90 dB at 15 m/50 ft.), freight trains (75 dB at 15 m/50
        ft.), and air conditioning (60 dB at 6 m/20 ft.). In Nigeria noise is
        becoming a serious problem through road traffic, electricity generating
        sets, music during social events and industrial sources. The most
        readily measurable physiological effect of noise pollution is damage to
        hearing, which may be either temporary or permanent and may cause
        disruption of normal activities or just general annoyance. The effect is
        variable, depending upon individual susceptibility, duration of
        exposure, nature of noise (loudness), and time distribution of exposure
        (such as steady or intermittent). On the average an individual will
        experience a threshold shift (a shift in an individual's upper limit of
        sound detectability) when exposed tonoise levels of 75 to 80dB for
        several hours. This shift will last only several hours once the source
        of noise pollution is removed. A second physiologically important level
        is the threshold of pain, at which even short-term exposure will cause
        physical pain (130 to 140dB). Any noise sustained at this level will
        cause a permanent threshold shift or permanent partial hearing loss. At
        the uppermost level of noise (greater than 150 dB), even a single
        short-term blast may cause traumatic hearing loss and physical damage
        inside the ear.
      </p>
      <p>
        Although little hard information is available on the psychological side
        effects of increased noise levels, many researchers attribute increased
        irritability, lower productivity, decreased tolerance levels, increased
        incidence of ulcers, migraine headaches, fatigue, and allergic responses
        to continued exposures to high-level noises in the workplace and the
        general environment. Reducing noise pollution by muffling the sounds at
        the source is one of the best methods in industry and for urban living.
        Protective equipment is generally mandatory when noise levels exceed 85
        dB(A) in industry. Creation of green cover adjacent to municipal roads
        and in mines is the way to mitigate noise pollution. It has been
        observed that noise level reduces by 10 decibels per every 10m wide
        green belt development. Apart, redesigning industrial equipment, shock
        mounting assemblies and physical barriers in the workplace are also for
        reduction and exposure of unwanted industrial noise. High way noise
        pollution can be mitigated by constructing noise barriers. Artificial
        noise barriers are solid obstructions built between the highway and the
        residential areas along a highway. They block major portion of noise
        produced by passing vehicles on a highway. Effective noise barriers
        typically reduce noise levels by as much as half or more. The
        construction of noise barrier may be built in the form of earth mounds,
        vertical wall along the highways for creation of blockage of sound
        generated by heavy vehicles. Creation of greenbelt in the space between
        the residences and highways also reduces the noise nuisance.
      </p>
      <h5 className='text-center text-uppercase'>AIR POLLUTION</h5>
      <p>
        <strong className='ml-3'>Air pollution</strong> is the accumulation in
        the atmosphere of substances that, in sufficient concentrations,
        endanger human health or produce other measured effects on living matter
        and other materials. Among the major sources of pollution are power and
        heat generation, the burning of solid wastes, industrial processes, and,
        especially, transportation. The six major types of pollutants are carbon
        monoxide, hydrocarbons, nitrogen oxides, particulates, Sulphur-dioxide,
        and photochemical oxidants. Local and Regional Smog has seriously
        affected more persons than any other type of air pollution. It can be
        loosely defined as a multisource, widespread air pollution that occurs
        in the air of cities. Smog, a contraction of the words smoke and fog,
        has been caused throughout recorded history by water condensing on smoke
        particles, usually from burning coal. The infamous London fogs--about
        4,000 deaths were attributed to the severe fog of 1952--were smog of
        this type. Another type, ice fog, occurs only at high latitudes and
        extremely low temperatures and is a combination of smoke particles and
        ice crystals.{' '}
      </p>
      <p>
        As a coal economy has gradually been replaced by a petroleum economy,
        photochemical smog has become predominant in many cities. Its unpleasant
        properties result from the irradiation by sunlight of hydrocarbons
        (primarily unburned gasoline emitted by automobiles and other combustion
        sources) and other pollutants in the air. Irradiation produces a long
        series of photochemical reactions. The products of the reactions include
        organic particles, ozone, aldehydes, ketones, peroxyacetyl nitrate, and
        organic acids and other oxidants. Sulphur dioxide, which is always
        present to some extent, oxidizes and hydrates to form sulphuric acid and
        becomes part of the particulate matter. Furthermore, automobiles are
        polluters even in the absence of photochemical reactions. They are
        responsible for much of the particulate material in the air; they also
        emit carbon monoxide, one of the most toxic constituents of smog. All
        types of smog decrease visibility and, with the possible exception of
        ice fog, are irritating to the respiratory system. Statistical studies
        indicate that smog is a contributor to malignancies of many types.
      </p>
      <p>
        Photochemical smog produces eye irritation and lacrimation and causes
        severe damage to many types of vegetation, including important crops.
        Acute effects include an increased mortality rate, especially among
        persons suffering from respiratory and coronary ailments. Air pollution
        also has a deleterious effect on works of art. Air pollution on a
        regional scale is in part the result of local air pollution that
        produced by individual sources, such as automobiles--that has spread out
        to encompass areas of many thousands of square kilometers.
      </p>

      <p>
        Meteorological conditions and landforms can greatly influence
        air-pollution concentrations at any given place, especially locally and
        regionally. For example, cities located in bowls or valleys over which
        atmospheric inversions form and act as imperfect lids are especially
        likely to suffer from incidences of severe smog. Oxides of Sulphur and
        nitrogen, carried long distances by the atmosphere and then precipitated
        in solution as acid rain, can cause serious damage to vegetation,
        waterways, and buildings. Air pollution in Nigeria is also as a result
        of cooking fuels. Many houses still use fire wood or charcoal for
        cooking purposes and this method releases oxides of carbon, nitrogen,
        and Sulphur into the environment. Asthma and bronchitis are the major
        ailments in Nigerian populations. Global Humans also pollute the
        atmosphere on a global scale, although until the early 1970s little
        attention was paid to the possible deleterious effects of such
        pollution. Measurements in Hawaii suggest that the concentration of
        carbon dioxide in the atmosphere is increasing at a rate of about 0.2%
        every year. The effect of this increase may be to alter the Earth's
        climate by increasing the average global temperature. Certain pollutants
        decrease the concentration of ozone occurring naturally in the
        stratosphere, which in turn increases the amount of ultraviolet
        radiation reaching the Earth's surface. Such radiation may damage
        vegetation and increase the incidence of skin cancer.
      </p>
      <p>
        {' '}
        Examples of stratospheric contaminants include nitrogen oxides emitted
        by supersonic aircraft and chlorofluorocarbons used as refrigerants and
        aerosol-can propellants. The chlorofluorocarbons reach the stratosphere
        by upward mixing from the lower parts of the atmosphere. It is believed
        that these chemicals are responsible for the noticeable loss of ozone
        over the Polar Regions that have occurred in the 1980s.
      </p>
      <p>
        The gaseous composition of unpolluted air <br /> The Gases Parts per
        million (vol)
      </p>
      <ul>
        <li>Nitrogen 756,500</li>
        <li>Oxygen 202,900</li>
        <li>Water 31,200</li>
        <li>Argon 9,000</li>
        <li>Carbon Dioxide 305</li>
        <li>Neon 17.4</li>
        <li>Helium 5.0</li>
        <li>Methane 0.97-1.16</li>
        <li>Krypton 0.97</li>
        <li>Nitrous oxide 0.49</li>
        <li>Hydrogen 0.49</li>
        <li>Xenon 0.08</li>
        <li>Organic vapors ca.0.02</li>
      </ul>

      <h5 className='text-uppercase text-center'>CONTROL OF AIR POLLUTON</h5>
      <p>
        The following should be done to manage and control air pollution; I. Use
        of better designed equipment and smokeless fuels, hearths in industries
        and at home. ii. Automobiles should be properly maintained and adhere to
        recent emission-control standards. iii. More trees should be planted
        along road side and houses. iv. Renewable energy sources, such as wind,
        solar energy, ocean currents, should fulfil energy needs. v. Tall
        chimneys should be installed for vertical dispersion of pollutants.
      </p>
      <p>
        The commonly used equipment/process for control of dust in various
        industries are:
      </p>
      <ol>
        <li>Mechanical dust collectors in the form of dust cyclones;</li>
        <li>Electrostatic precipitators – both dry and wet system;</li>
        <li>Particulate scrubbers;</li>
        <li>Water sprayer at dust generation points;</li>
        <li>Proper ventilation system and</li>
        <li>
          Various monitoring devices to know the concentration of dust in
          general body of air.
        </li>
      </ol>
      <p>
        The common equipment / process used for control of toxic / flue gases
        are the:
      </p>
      <ol>
        <li>Process of desulphurization;</li>
        <li>Process of denitrification;</li>
        <li>Gas conditioning etc. and </li>
        <li>
          Various monitoring devices to know the efficacy of the systems used
        </li>
      </ol>
      <p>
        In addition to the above mentioned, the following steps, should be taken
        for reduction of air pollution - To change our behavior in order to
        reduce AIR POLLUTION at home as well as on the road.
      </p>
      <h6>At Home:</h6>
      <ol>
        <li>
          Avoid using chemical pesticides or fertilizers in your yard and
          garden. Many fertilizers are sources of nitrous oxide, a greenhouse
          gas that contributes to global warming. Try organic products instead.
        </li>
        <li>
          Compost your yard waste instead of burning it. Outdoor burning is not
          advisable, as it pollutes air. Breathing this smoke is bad for you,
          your family and your neighbours. Plus, you can use the compost in your
          garden.
        </li>
        <li>
          If you use a wood stove or fireplace to heat your home, it would be
          better to consider switching to another form of heat which does not
          generate smoke. It is always better to use sweater or warm clothing
          than using fireplace.
        </li>
        <li>
          Be energy efficient. Most traditional sources of energy burn fossil
          fuels, causing air pollution. Keep your home well-maintained with
          weather-stripping, storm windows, and insulation. Lowering your
          thermostat can also help – and for every two degrees Fahrenheit you
          lower it, you save about two percent on your heating bill.
        </li>
        <li>
          Plant trees and encourage other to plant trees as well. Trees absorb
          and store carbon dioxide from the atmosphere, and filter out air
          pollution. During warmer days, trees provide cool air, unnecessary use
          of energy on air conditioning is avoided, hence the air pollution.
        </li>
        <li>
          Try to stop smoking; at home, at office or outside. Tobacco smoking
          not only deteriorates self’s health; it affects others health too.
        </li>
      </ol>
      <h6>On the Road:</h6>
      <ol>
        <li>
          Keep your vehicle well maintained. A poorly maintained engine both
          creates more air pollution and uses more fuel. Replace oil and air
          filters regularly, and keep your tires properly inflated.
        </li>
        <li>
          Drive less. Walking, bicycling, riding the bus, or working from home
          can save you money as well as reducing air pollution.
        </li>
        <li>
          Don’t idle your vehicle. If you stop for more than 30 seconds, except
          in traffic, turn off your engine.
        </li>
        <li>
          Don’t buy more car than you need. Four-wheel drive, all-wheel drive,
          engine size, vehicle weight, and tire size all affect the amount of
          fuel your vehicle uses. The more fuel it uses the more air pollution
          it causes.
        </li>
      </ol>
    </div>
  );
};

export default EnvPollution;
