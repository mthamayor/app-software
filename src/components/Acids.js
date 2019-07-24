import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PhScale from '../assets/img/ph-scale.jpg';

const createData = (name, source) => {
  return { name, source };
};

const rows = [
  createData('Amino Acid', 'Meat'),
  createData('Ascorbic Acid', 'Orange'),
  createData('Citric Acid', 'Lemon'),
  createData('Fatty Acid', 'Vegetable'),
  createData('Lactic Acid', 'Sour milk'),
  createData('Tataric Acid', 'Grape')
];

const Acids = props => {
  return (
    <div className='p-3'>
      <div className='text-center'>
        <h3>Acids, Bases and Salts</h3>
      </div>
      <h4 className='text-center text-uppercase'>Acids</h4>
      <p>
        Acids are substances that produce hydrogen ion (H+) as the only
        positive ion. Whenever the world acid is mentioned, many people think
        of a substance which is corrosive. We often hear people talk of acid
        burns. But not all acids are corrosive. There are more fundamental
        properties of acids which are common to them all.
      </p>
      <h5 className='text-center text-uppercase'>
        Natural and Mineral Acids
      </h5>
      <p>
        A number of naturally-occurring substances, especially liquids from
        unripe fruits taste sour and are acidic. Do you remember the taste of
        an unripe orange?
      </p>
      <p>
        Certain materials change colour when dipped into a solution containing
        acid. One of these materials is “litmus”. For purpose of work in the
        laboratory, two types of litmus papers are available; blue and red.
        Litmus paper is called an indicator. Acidic substances turn blue
        litmus paper red.
      </p>
      <p>Below is a table showing some natural acids and their sources.</p>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name of Natural Acid</TableCell>
              <TableCell align='right'>Sources</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Typography variant='caption' className='mt-2 mb-5 text-center'>
        <strong>Table 1</strong> Some natural acids and their sources
      </Typography>
      <p>In the laboratory, some reagents are clearly marked acid.</p>
      <h6 className='text-uppercase'>Properties of Acids</h6>
      <ol>
        <li>
          Acids generally have a sour taste. 2. Acids turn blue litmus red.
        </li>
        <li>
          Acids react with trioxocarbonate(iv) to produce carbon dioxide gas.
        </li>
        <li>Acids react with zinc metal to produce hydrogen gas</li>
        <li> Concentrated acids are corrosive.</li>
      </ol>
      <h4 className='text-center text-uppercase'>Bases</h4>
      <p>
        In a general sense, bases are regarded as the opposites of acids.
        According to the definition of Arrhenius, a base is any hydroxide that
        dissolves in water to yield hydroxide (OH) ions as the only negative
        ion. The following are examples of bases;
      </p>
      <div className='text-center'>Potassium hydroxide(KOH)</div>
      <div className='text-center'>KOH= K + OH</div>
      <div className='text-center'>NaOH= Na + OH</div>
      <p>
        When we defined acid, we referred to substances that produce hydrogen
        ion(H) as the only positive ion. In bases the ion produced is the
        negative hydroxyl(OH) ion. Bases are also known as the oxides of metal
        or metallic oxides for example K2O potassium oxide. Metallic oxides
        can dissolve in water form alkalis. Alkalis yield hydroxyl(OH) ion.
      </p>
      <h6 className='text-uppercase'>Properties of bases</h6>
      <ol>
        <li>Bases have a slippery or soapy feel.</li>
        <li> Bases turn red litmus paper blue.</li>
        <li> Concentrated solutions of bases are corrosive.</li>
      </ol>
      <h5 className='text-center text-uppercase'>Neutralization</h5>
      <p>
        The reaction of base with an acid is very important. Bases neutralizes
        acid. The reaction whereby a base reacts with an acid to produce a
        salt and water only is neutralization reaction. For example, in the
        reaction between sodium hydroxide (NaOH) and hydrochloric acid (HCl),
        the products are sodium chloride (NaCl) and water (H2O). The sodium
        hydroxide has neutralized the hydrochloric acid.
      </p>
      <div className='text-center'>
        <div className='equation d-flex justify-content-between'>
          <span>NaOH</span>
          <span>+</span>
          <span>HCL</span>
          <span>=</span>
          <span>NaCl</span>
          <span>+</span>
          <span>H2O</span>
        </div>
        <div className='equation d-flex justify-content-between'>
          <span>Base</span>
          <span />
          <span>Acid</span>
          <span />
          <span>Salt</span>
          <span />
          <span>Water</span>
        </div>
      </div>
      <h4 className='text-center text-uppercase'>Alkalis: Soluble Bases</h4>
      <p>
        Not all bases are readily soluble in water. The degree of solubility
        varies from one base to the other. When, for instance, sodium
        hydroxide was compared with calcium hydroxide with respect to their
        solubility in water, it was found, that sodium hydroxide dissolved
        easily while calcium hydroxide with much difficulty.
      </p>
      <p>
        Bases which are easily soluble in water are called alkalis. Sodium
        hydroxide (NaOH) and potassium hydroxide (KOH) are good examples of
        alkalis. They are soluble bases.
      </p>
      <h4 className='text-center text-uppercase'>Salts</h4>
      <p>
        Previously, it was said that when an acid is neutralized with a base,
        salt and water are obtained. We can therefore define salt as a product
        of neutralization.
      </p>
      <p>
        Salt is defined as a compound which consists of a positive metallic
        ion and a negative, non-metallic ion. However, in general terms a salt
        is better defined as an ionic compound containing a positive ion other
        than a hydrogen ion and a negative ion other than the hydroxide ion.
        Sodium chloride, NaCl is a salt composed of the sodium ion, Na+ and
        the chloride ion. Since a salt can be produced by carrying out a
        neutralization reaction, we can conclude that such a compound will be
        neither acidic nor basic. Salts which are produced by the process of
        neutralization are therefore neutral litmus, that is, they will have
        no effect on either red or blue litmus paper. A solution of sodium
        chloride, NaCL in water is neutral to litmus.
      </p>
      <p>
        The reason why salt like sodium chloride is neutral to litmus is that
        during the process of neutralization, the hydrogen ion, which is acid
        to litmus, is neutralized by the hydroxyl ion, which is basic to
        litmus. The product of this neutralization of the acidic and basic
        ions is water, which is neutral to litmus.
      </p>
      <div className='text-center'>
        <div className='equation d-flex justify-content-between'>
          <span>H</span>
          <span>+</span>
          <span>OH-</span>
          <span>=</span>
          <span>H2O</span>
        </div>
        <div className='equation d-flex justify-content-between'>
          <span>Hydrogen ion</span>
          <span />
          <span>Hydroxyl ion</span>
          <span />
          <span>Water</span>
        </div>
      </div>
      <p>
        Or more correctly, because in the presence of water the hydrogen ion
        is always hydrated.
      </p>
      <div className='text-center'>
        <div className='equation d-flex justify-content-between'>
          <span>H3O+</span>
          <span>+</span>
          <span>OH-</span>
          <span>=</span>
          <span>2H2O</span>
        </div>
      </div>
      <p>The above two equations illustrate the process of neutralization.</p>
      <h5 className='text-center text-uppercase'>
        Importance of Acids, Bases and Salts
      </h5>
      <h6 className='text-uppercase'>Acids</h6>
      <p>
        These play important roles in the life processes that go on inside our
        bodies. Acid are present in some of the food items we eat, e.g.
        fruits, vitamin C which helps to build our bodies.
      </p>
      <p>
        Acids are used in many industrial processes especially in the
        manufacture of fertilizers, dyes and explosives.
      </p>
      <h6 className='text-uppercase'>Bases</h6>
      <p>
        These are commonly used in the home either as a cleaning agent
        (ammonia water) or as a laxative (milk of magnesia).
      </p>
      <p>
        Bases are used industrially in the manufacture of soaps, rayon and
        paper.
      </p>
      <h6 className='text-uppercase'>Salts</h6>
      <p>
        Some are useful additives to our food, e.g. sodium chloride. Many of
        the chemicals used in the laboratories are salts.
      </p>
      <h5 className='text-uppercase text-center'>pH value</h5>
      <p>
        When we were finding out the properties of acids and base, we used
        both blue and red litmus paper. Acids turned blue litmus paper red
        while bases turned red litmus blue.
      </p>
      <p>
        Thus, by using litmus paper, we have something which tells us some
        property substance. The litmus paper was thus acting as an indicator.
        Using an indicator is a very useful and reliable way of finding out
        the nature of a substance.
      </p>
      <p>
        Many colouring materials extracted from plants can act as indicators.
        Extracts from leaves and flowers can often act as indicators. Litmus
        itself is extracted from a plant.
      </p>
      <p>
        Litmus paper is an indicator that can tell us if a given solution
        contains either an acid or an alkali. If we have two acidic solutions
        or two basic solutions, our litmus paper indicator can only tell us
        whether they are acidic or basic, but it cannot tell us which
        solutions contains a higher concentration of H3O + ions.
      </p>
      <p>
        Similarly, our litmus indicator cannot tell us which of the basic
        solutions contains a higher concentration of the OH ions. This is a
        shortcoming of the use of litmus paper as an indicator. However, it
        has been possible to obtain an indicator which not only tells us
        whether a solution is acidic, but can also distinguish differences in
        the acid content of acidic solutions. This indicator which is called a
        “universal indicator”, changes colour not just into red and blue but
        into many other colours. These various colours of the universal
        indicator correspond to certain degrees of acidity.
      </p>
      <p>
        A scale which shows the degree of acidity is called a pH scale. In
        effect. pH simply refers to the concentration of H+ ions in any given
        solution. The pH scales ranges from 0-14. A solution with a low pH
        such as 2 is more acidic than a solution with 6. A solution of 7 is
        neutral; one with a less pH than this is acidic; one with a pH greater
        than 7 is alkaline.
      </p>
      <p>
        Thus, a solution with a pH of 8 contains less OH- ion than a solution
        with pH of 14.
      </p>
      <p>The figure below shows a pH scale ranging from 0-14.</p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={PhScale} alt='img' />
        </Paper>
      </div>
    </div>
  );
};

export default Acids;
