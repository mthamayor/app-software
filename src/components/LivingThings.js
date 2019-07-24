import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Analogous from '../assets/img/analogous.png';
import PlantAnalogous from '../assets/img/plant-analogous.png';

const createData = (name, classification, description) => {
  return { name, classification, description };
};

const rows = [
  createData('Kingdom', 'Animalia', 'all animals same as zebra'),
  createData('Phylum', 'Chordata', 'all animals with a backbone'),
  createData('Class', 'Mammalian', 'animals with a backbone, which have hair'),
  createData('Order', 'Primate', 'mammals with hands and feet'),
  createData('Family', 'Hominidae', 'apes, primitive humans and modern humans'),
  createData('Genus', 'Homo', 'primitive humans and modern humans only'),
  createData(
    'Species',
    'sapiens',
    'modern humans only (scientific name: homo sapiens)'
  )
];

const LivingThings = props => {
  return (
    <div className='p-3'>
      <div className="text-center">
        <h3>CHARACTERISTICS AND CLASSIFICATION OF LIVING THINGS</h3>
      </div>
      <p>
        <span className='pl-3' />
        It is obvious that people are living things. Most of us realize that
        plants are living too, but what about a car? Cars need fuel, and can
        do many of the things that animals and plants can do. An individual
        living thing, such as an animal or a plant, is called an organism. The
        term ‘living organism’ is usually used to describe something which
        displays all the characteristics of living things. Examples of living
        things are man, animals, plants, etc.
      </p>
      <h4 className='text-uppercase text-center'>
        Characteristics of living things
      </h4>
      <p>
        <span className='pl-3' />
        There are seven activities which make organisms different from
        non-living things. These are the seven characteristics of living
        organisms.
      </p>
      <ol>
        <li>
          <strong>Nutrition: </strong> Living things take in materials from
          their surroundings that they use for growth or to provide energy.
          Nutrition is the process by which organisms obtain energy and raw
          materials from nutrients such as proteins, carbohydrates and fats.
        </li>
        <li>
          <strong>Respiration: </strong>Respiration is the release of energy
          from food substances in all living cells. Living things break down
          food within their cells to release energy for carrying out the
          following processes.
        </li>
        <li>
          <strong>Movement: </strong> All living things move. It is very
          obvious that a leopard moves but what about the thorn tree it sits
          in? Plants also move in various different ways. The movement may be
          so slow that it is very difficult to see.
        </li>
        <li>
          <strong>Excretion: </strong> All living things excrete. As a result
          of the many chemicals reactions occurring in cells, they have to get
          rid of waste products which might poison the cells. Excretion is
          defined as the removal of toxic materials, the waste products of
          metabolism and substances in excess from the body of an organism.
        </li>
        <li>
          <strong>Growth: </strong> Growth is seen in all living things. It
          involves using food to produce new cells. The permanent increase in
          cell number and size is called growth.
        </li>
        <li>
          <strong>Reproduction: </strong> All living organisms have the
          ability to produce offspring.
        </li>
        <li>
          <strong>Sensitivity: </strong> All living things are able to sense
          and respond to stimuli around them such as light, temperature,
          water, gravity and chemical substances. Learn these seven
          characteristics of living organisms. They form the basis of the
          study of Biology. Each one of these characteristics will be studied
          in detail during the course. Whilst many other things carry out one
          or more of the above processes, only living organisms possess all of
          these characteristics.
        </li>
      </ol>
      <h5 className='text-center text-uppercase'>
        Classification of living organisms
      </h5>
      <p>
        <span className='pl-3' />
        If you have ever been to a library, you will know how much easier it
        is to find a book on a particular subject if the books are arranged in
        subject groups. When the librarian has a new book to add to the
        library, he or she will group it with books on a similar topic,
        according to a classification system.
      </p>
      <h6 className='text-uppercase'>
        The use of the hierarchical classification system
      </h6>
      <p>
        <span className='mr-3' />
        Classification helps us to impose order and a general plan on the
        diversity of living things. Scientists have always tried to organize
        and classify the objects, including living organisms, around them.
        Classification can be defined as grouping organisms according to their
        structural similarities. This means that organisms that share similar
        features are placed in one group.
      </p>
      <p>
        <span className='mr-3' />
        These groups are arranged from the largest group of organisms to the
        smallest group of organisms. The groups, from largest to smallest, are
        arranged as follows:
      </p>
      <ul>
        <li>kingdom</li>
        <li>phylum (plural phyla)</li>
        <li> class</li>
        <li>order</li>
        <li>family</li>
        <li>genus (plural genera)</li>
        <li> species.</li>
      </ul>
      <p>
        <span className='mr-3' />
        The <strong>species</strong> is the smallest group of organisms. As
        you go through the classification hierarchy, you will see that
        scientists have used broader features to put organisms into{' '}
        <strong>kingdoms</strong>, which are the largest groups of organisms.
      </p>
      <p>
        <span className='mr-3' />
        When you move down towards the species, which are the smallest groups
        of organisms, features are becoming specific. In other words, two
        organisms that belong to the same species share more features than
        those in the same kingdom but in different species.
      </p>
      <p>
        <span className='mr-3' />
        <strong>Species</strong> can be defined as a group of organisms with
        similar features, and these organisms are capable of breeding and
        produce fertile offspring. You are probably aware of the fact that
        horses and donkeys belong to the same kingdom, phylum, class, order,
        family as well as genus but they are from different species.
        Therefore, if a donkey and the horse happen to breed, they produce an
        offspring called a mule. The mule is infertile, meaning that it cannot
        reproduce offspring because it is a product of organisms of different
        species.
      </p>
      <p>
        <span className='mr-3' />
        Classification hierarchy has many uses. First, it helps scientists to
        sort organisms in order. Second, it helps them to identify new
        organisms by finding out which group they fit. Third, it is easier to
        study organisms when they are sorted in groups.
      </p>
      <h5 className='text-center text-uppercase'>
        The hierarchical classification system
      </h5>
      <p>
        <span className='mr-3' />
        There are various sizes of groups into which living organisms are put.
        The largest group is the kingdom. There are five kingdoms:{' '}
        <strong>prokaryotes (which includes bacteria)</strong>,{' '}
        <strong>protoctista</strong>, <strong>fungi</strong>,{' '}
        <strong>plants</strong> and <strong>animals</strong>.
      </p>
      <p>
        <span className='mr-3' />
        Each kingdom is further divided into smaller groups called{' '}
        <strong>phyla</strong>, based on a few features that are shared by
        some organisms. For example, the arthropod phylum contains all the
        animals without a backbone that also have jointed legs and a hard
        covering over their body, such as insects, crustaceans and spiders.
      </p>
      <p>
        <span className='mr-3' />A phylum is then subdivided into classes,
        orders, families, genera, and finally species. In this system of
        classification, the various groups are called{' '}
        <strong>taxa (singular: taxon)</strong>.
      </p>
      <ul>
        <li>Kingdom</li>
        <li>phylum</li>
        <li>class</li>
        <li>order</li>
        <li>family</li>
        <li>genus</li>
        <li>species</li>
      </ul>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Classification</TableCell>
              <TableCell align='right'>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.classification}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Typography variant='caption' className='mt-2 mb-5 text-center'>
        <strong>Table 1</strong> shows how this system can be used to classify
        a human being.
      </Typography>
      <h4 className='text-center text-uppercase'>
        Two systems of classification
      </h4>
      <p>
        <span className='mr-3' />
        Classification can be based on two different systems, natural and
        artificial. We will look at natural classification first.
      </p>
      <h5 className='text-uppercase text-center'>Natural classification</h5>
      <p>
        <span className='mr-3' />
        The hierarchical classification system described above is based on a
        natural classification system that uses common features shared by
        organisms. Natural classification is based on two ideas:
      </p>
      <ul>
        <li>homologous structures</li>
        <li>evolutionary relationships</li>
      </ul>
      <h5 className='text-uppercase'>Homologous structures</h5>
      <p>
        <span className='mr-3' />
        Homologous structures are features of organisms that are similar{' '}
        <strong>in</strong>
        structure but may look very different from each other and may be used
        for different purposes. a horse’s front leg, the human arm and a bat’s
        wing are all homologous structures.
      </p>
      <p>
        <span className='mr-3' />
        They have the same number and arrangement of bones and this means that
        they probably evolved from a single type of structure that was present
        in a common ancestor millions of years ago. A fly’s wing is not
        homologous with a bat’s wing. It may look similar and do the same job
        but it develops from a completely different origin. The fly’s wing has
        no bones and is not covered by feathers. A bat’s wing and a fly’s wing
        are termed <strong>analogous</strong>. A bat and a fly would not be
        grouped together!
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={Analogous} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='text-center mt-2'>
        Evolutionary relationships
      </Typography>
      <p>
        <span className='mr-3' />
        If you look at photographs of people who share a common ancestor, such
        as a grandparent or great grandparent, you often see startling
        similarities in appearance. The people in the photos are obviously
        related to each other and have inherited some features from their
        grandparents.
      </p>
      <p>
        <span className='mr-3' />
        In a natural classification system, biologists group together
        organisms which are structurally similar and share common ancestors.
        Natural classification produces a branching set of relationships. This
        shows how the plants are divided into major subgroups such as mosses,
        ferns, conifers and flowering plants. Each of these subgroups can be
        divided further.
      </p>
      <p>
        <span className='mr-3' />
        In this diagram only the two main groups of flowering plants have been
        shown. Where organisms are divisions of the same subgroup, such as the
        monocotyledons and dicotyledons, they are more closely related and may
        share more similar features than with the mosses and ferns. The figure
        below shows the main subgroups of the plant kingdom.
      </p>
      <div className='text-center'>
        <Paper className='plate'>
          <img className='img img-fluid' src={PlantAnalogous} alt='img' />
        </Paper>
      </div>
      <Typography variant='caption' className='text-center mt-2'>
        Plants comparision
      </Typography>
      <p>
        <span className='mr-3' />
        In the animal kingdom, humans,{' '}
        <span className='font-italic'>Homo sapiens</span>, are found, as is
        the cockroach{' '}
        <span className='font-italic'>Periplaneta americanus</span>. Humans
        and cockroaches share a common ancestor, but that was more than 500
        million years ago! You can see many structural differences between
        humans and cockroaches and so there is no natural relationship.
        Because of this we classify{' '}
        <span className='font-italic'>Homo sapiens</span> and{' '}
        <span className='font-italic'>Periplaneta americanus</span> into very
        different groups!
      </p>
      <h5 className='text-uppercase text-center'>
        Artificial classification
      </h5>
      <p>
        <span className='mr-3' />
        With artificial classification you can use any grouping you like. You
        could put all the animals that fly in the same group. This group would
        then include birds, bats and many insects. You could put all animals
        that live in water and have streamlined, fish-like bodies in the same
        group. This group would then include fish and whales. Artificial
        classification systems are also used as the basis for Dichotomous keys
        that biologists use to identify organisms.
      </p>
    </div>
  );
};

export default LivingThings;
