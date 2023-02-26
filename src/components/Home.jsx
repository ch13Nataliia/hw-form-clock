import React from 'react';
import adoptCat from './image/prepare-cat-image-min.jpg';

function Home() {
  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      <h2>How to plan and prepare for your new cat</h2>

      <p>
        Once you’ve decided to give a cat a home, it’s time to get your home
        ready and prepare for a cat. You’ll need to make sure you leave enough
        time to make adequate preparations, as well as to go shopping for
        everything they need. The most important thing your cat needs is a
        quiet, comfortable and secluded space of their or her own. It could be a
        spare bedroom or a cosy space in the corner of your living room. This
        will make sure your cat becomes familiar with one space before exploring
        the rest of your home. Shopping for your cat Perhaps you're thinking
        about what to buy for your cat? Watch our video for top tips on
        essential cat products for your new arrival. You can buy cat products
        online in our shop, where you'll find everything from cosy beds to toys
        and feeding mats. Watch our video for top tips Shop our cat care
        collection
      </p>
      <div>
        <h3>
          Here's a step-by-step guide on setting up a space for your new cat
        </h3>
        <ol>
          <li>
            Make sure the space is private. Keep dogs, kids and guests out
          </li>
          <li>
            Make it safe. Remove potential hazards like cleaning products or
            anything that could be knocked over
          </li>
          <li>
            Provide a hiding space. A cardboard box on top of a tall piece of
            furniture is ideal
          </li>
          <li>
            Add your cat’s essential items. You’ll find a full list of these
            below
          </li>
          <li>
            Provide some fun. Puzzle toys, fishing rod toys and even cardboard
            boxes are excellent boredom busters
          </li>
        </ol>
        <picture>
          <img src={adoptCat} />
        </picture>
      </div>
    </div>
  );
}

export default Home;
