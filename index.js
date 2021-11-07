
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import "./src/styles/global.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import ScriptTag from 'react-script-tag';
import '/Users/scienz/my-app/src/loader.js';




require("./src/styles/global.css");




/*
const Demo = props => (
<ScriptTag type="text/javascript" src="/Users/scienz/my-app/src/unfoldingMenu — копия.js" />
);


componentDidMount(){
  const script = document.createElement("script");
  script.src = "/Users/scienz/my-app/src/unfoldingMenu — копия.js";
  script.async = true;
  script.onload = () => this.scriptLoaded();

  document.body.appendChild(script);
};

scriptLoaded(){
  window.A.sort();
};

scriptLoaded(){
  A.sort();
}

*/




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const logo = require('/Users/scienz/my-app/src/img/logo.png'); // with require

function em_specrum(id){
  const em_spectrum=(
  
       <p class="text2">Electromagnetic spectrum is the range of frequencies that light can be in</p>
  
   );
ReactDOM.render(
em_spectrum, document.getElementById(id)
);}



function black_body(id){

  const black_body=(<p class="text2">EThe black body is a body that absorbs all the EM waves that fall on it. 
  Inside, there is no escape for the light, so it just stays there.'+
  'As the heat of the Sun travels from Sun to Earth with the speed of light, 
  it reaches Earth in 8,33 minutes. Both heat and light are electromagnetic waves. 
  They, however, have different wavelengths and frequencies. Visible light has higher 
  frequencies than the heat (infrared light). Besides visible light and infrared radiation, 
  the Sun emits as well ultraviolet radiation and other electromagnetic waves.'+
  
  
  'Actually, all the solid bodies emit some form of electromagnetic radiation. 
  The range of their frequencies depends on the temperature of the body. 
  Body heated up until a certain temperature will emit light. We have seen it with stars. 
  The higher the temperature, the shorter the waves that it emits. And ,as wavelength and frequency 
  are in an inverse proportion, the higher the frequency. It kinda moves to the gamma ray direction on the spectrum. 
  The most hated up bodies emit white light (we see them as white) because white is essentially the mixture of all colors. 
  It is just a full-house of wave frequencies. You see, there is no white on the spectrum. That’s the reason why.
  
  
  
  <img src="scienz_main/static/scienz_main/media/spectrum.webp" /></p>)
  
  ReactDOM.render(
    black_body, document.getElementById(id)
    );}


/*       !!TEMPLATE!!

function topic_name(id){

  topic_name=(
    <p></p>

  );

  ReactDOM.render(
    topic_name, document.getElementById(id)
    );};

}*/





function standard_model(id){

  standard_model=(
    <p></p>

  );

  ReactDOM.render(
    standard_model, document.getElementById(id)
    );};


  function neutrino(id){

    neutrino=(
        <p></p>
    
      );
    
      ReactDOM.render(
        neutrino, document.getElementById(id)
        );};



  function nuclear_fusion(id){

    nuclear_fusion=(
              <p></p>
          
            );
          
     ReactDOM.render(
      nuclear_fusion, document.getElementById(id)
       );};

       function bohrs_model(id){

        bohrs_model=(
          <p>




            The most famous of them all: 
                    Bohr’s planetary model of an atom. In this model, 
                    the electrons are situated on the orbitals on certain distance 
                    from the nucleus.
By spinning around the nucleus, the electron will waste all of its energy and stop existing in the span of less
 than a second. So, there was something more to it. Bohr figured that there were some stable orbits.
          </p>
      
        );
      
        ReactDOM.render(
          bohrs_model, document.getElementById(id)
          );};

/*    A local block of text on Bohr's atomic model

He started wandering about the significance of Planck constant and applied it to the moment of impulse of a particle, specifically, to the chance that it can be increasing or decreasing for specific values if the electrons come and go.

He met someone called Nickolson and studied his formula for the moment of impulse L=mvr= n(h/2pi)

The moment of impulse is like the impulse, but for circular motion. L=mvr, where r is the radius of motion. 

In short, Bohr’s principle says that for an electron to move from one energy level to another 
it has to either absorb one quant of energy (to move up, to a higher energy level) or emit one quant of 
energy (to move down, to a lower energy level). 

In Bohr’s model, an excited (with some additional energy) electron can only jump to an orbit, 
where its energy will change by a number divisible by h/2pi.  

L=n(h/2pi) is the condition of existence of a quantum orbit. n here is the number of orbit.
 So, the impulse of an electron on the nearest orbit to the nucleus will have moment of impulse of L=1(h/2pi), the second one – L=2(h/2pi).
 */

          function h_uncertainty(id){

            h_uncertainty=(
              <p>

we cannot know  the position of the particle and its velocity 
(well, actually, its momentum, but since momentum is mass times velocity, and we know the mass of a particle, 
it is the velocity) simultaneously. This is the most annoying thing in quantum mechanics, because this is this is this 
one annoying bit which forbids us from teleportation. However, it can as well be regarded as a purely technical problem: we just haven’t figured out the alternative ways to deal with this problem yet.


Heisenberg uncertainty principle places a limitation on how precisely we are able to know the position of the particle. 

To detect a particle, we’ll have to use something of comparable size to the particle. We can use radiation of
 wavelength 10-15 (gamma rays).

There is a relationship is physics p=h/. It was discovered by deBroglie, and it is not as fancy as the previous ones,
 so I wouldn’t be long on that.
According to this relationship (=h/p), if the wavelength is 10-15
Momentum will be p=(6,63*10 -34)/ 10-15= 10 -18 Ns 

What it means is that every time we try to measure where the particle is, we move it. This momentum transmitted
 to it is like a punch. You are essentially kicking something whose location you where trying to measure. You are adding energy to the particle. The position becomes immeasurable. 

For this reason, 

ΔxΔp h/4pi

Δx is the uncertainty in position, Δp is the uncertainty in momentum

The more accurately you know the position of the particle, the less accurately you know the momentum and vice versa.

              </p>
          
            );
          
            ReactDOM.render(
              h_uncertainty, document.getElementById(id)
              );  };    
              
              



          /*     !!LOCAL TEXT FOR HEISENBERG'S UNCERTAINTY!!! 
          
          
          The nucleus is overall positive (positive and neutral charges) and electrons are, obviously, negative. 
          They are attracted because of magnetism. The question is: why aren’t they falling on the nucleus altogether? 

Electrons in the atom do enter the nucleus. This exactly has to do with the wave-nature of electrons.
 Electrons are not little balls that can fall into the nucleus under electrostatic attraction.
  Rather, electrons are quantized wavefunctions that spread out in space and can sometimes act like particles. An electron in an atom spreads out according to its energy. The states with more energy are more spread out. All electron states overlap with the nucleus, so the concept of an electron "falling into" or "entering" the nucleus does not really make sense. Electrons are always partially in the nucleus. 
 */
              function energy_levels(id){

                energy_levels=(
                  <p>
                    In the ground state, i.e. in the state when all the electrons are I their minimal energy states, and this is the state which all the electrons, and all the particles on the whole, want to achieve (see, not only humans are lazy, nature is lazy as well), the electrons are on their orbitals. They are only moving on these orbitals and do not interfere with the other electrons.
                     By the way, there can only be one electron on each orbital, 
                     or, as it is also called, on each energy level due to 
                     called Pauli prohibition principle. 
                     Energy on the energy levels is always negative because you need 
                     to put in work to separate from the nucleus
                     
                     
                     But where is the energy in all of this? Knowing the radiuses of all orbits 
                     (which are constant for all elements btw, as the radius of the orbitals is determined by the formula
                      r=(h2/(4pi2mq2)n2), where ALL the values save n, which is just an integer, are constant), he could 
                      calculate the energies for each orbit specifically, and through the difference of stationary states determined 
                      the frequencies of the emission and absorption of light.
                      It was determined by the relationship hf=Ei -Ef  where  Ei , Ef  are the values of energy initially and finally.
                     </p>
              
                );
              
                ReactDOM.render(
                  energy_levels, document.getElementById(id)
                  );};




function rutherford_model(id){

  rutherford_model=(
<p>In Rutherford’s planetary model of a hydrogen atom an electron was orbits the nucleus</p>
                  
  );
                  
   ReactDOM.render(
    rutherford_model, document.getElementById(id)    );};



    function negative_energy(id){

      negative_energy=(
        <p></p>
    
      );
    
      ReactDOM.render(
        negative_energy, document.getElementById(id)
        );};


        function prinicpal_q_n(id){

          prinicpal_q_n=(
            <p>By the way, n is called the principal quantum number. 
              You seem if the principal quantum number n is equal to 1, L=0. Well, almost equal to zero. 
              You know why? Because h is very-very small. And for this reason, the orbitals has a shape of a sphere. 
              It is called s-orbital. If the principal quantum number n=2, L can have two values. It is either 1, or 0. If it is zero, 
              the orbital has a spherical shape. If it is 1, the orbital has a shape of a weird 3D infinity sign. 
              All in all, the higher the orbit, the higher the moment of impulse. 

            </p>
        
          );
        
          ReactDOM.render(
            prinicpal_q_n, document.getElementById(id)
            );};


            function pauli_prohibition(id){

              pauli_prohibition=(
                <p></p>
            
              );
            
              ReactDOM.render(
                pauli_prohibition, document.getElementById(id)
                );};



                function angular_momentum(id){

                  angular_momentum=(
                    <p>L is actually another quantum number, it is known as angular momentum quantum number (well, obviously). It is surprisingly important.  
                      [3D models of orbitals]
                      These orbitals are determined by L, specifically, their shape.</p>
                
                  );
                
                  ReactDOM.render(
                    angular_momentum, document.getElementById(id)
                    );};



                    function emission_spectra(id){

                      emission_spectra=(
                        <p>Different elements can emit waves of different frequencies. 
                          You might have come across an expression “the emission spectrum of an element”. This is what is used to determine the chen=mical composition of istant objects.
                        This has to do with Balmer’s formula. 
                        Bohr derived Balmer’s formula with his atomic model. 
                        He mixed up classical and quantum physics and he got the same formula, but with R,
                         Ridberg’s constant, represented as 2pi2nq4 /h3. This formula allowed to calculate the spectrum for hydrogen from the knowledge about the electrons on its orbits

                        </p>
                    
                      );
                    
                      ReactDOM.render(
                        emission_spectra, document.getElementById(id)
                        );};




function cern(id){

  cern=(
    <p>CERN has a range of accelerators. An accelerator makes
       particles reach velocities close to the speed of light. Then, they are smashed onto a target, or against 
      each other, and the resultant debris is studied. 
      When the particles interact like this, being smashed into each other, 
      they produce new particles. This is how we  observe the remaining particles  of the standart model.</p>

  );

  ReactDOM.render(
    cern, document.getElementById(id)
    );};

    function collisions(id){

      collisions=(
        <p></p>
    
      );
    
      ReactDOM.render(
        collisions, document.getElementById(id)
        );};
        

        function super_cond(id){

          super_cond=(
            <p></p>
        
          );
        
          ReactDOM.render(
            super_cond, document.getElementById(id)
            );};


            function antimatter(id){

              antimatter=(
                <p></p>
            
              );
            
              ReactDOM.render(
                antimatter, document.getElementById(id)
                );};



function qed(id){

  qed=(
    <p></p>

  );

  ReactDOM.render(
    qed, document.getElementById(id)
    );};


function symmetry(id){

  symmetry=(
    <p>Symmetry is one of the fundamental laws of nature, or rather it is incorporated 
      in the most fundamental laws of nature. An object or a pattern possesses symmetry 
      if it remains completely unchanged after it is transformed in some way. For example, 
      there are multiple laws of symmetry, or invariance, as it scientifically called, such as the law of conservation of energy, 
      the law of conservation of charge, the law of conservation of spin (one of today’s subtopics), the law of conservation of momentum. 
      The link between laws of conservation and symmetry was discovered by Emmy Noether in the 20th century after studying 
      Einstein’s relativity. Invariance also implies that the laws of physics do not change with place and time. 
    Other examples include snowflakes. There is a mathematical study of symmetry called group theory. 
    </p>

  );

  ReactDOM.render(
    symmetry, document.getElementById(id)
    );};


/*
              SYMMETRY LOCAL
Symmetry has been one of the main focuses of early scientists such as Euclid, 
Pythagorus, Plato and other fathers of math and geometry. They all were convinced that the rules the Universe obeys 
must be symmetric. It is still considered that the deepest and most primary laws of nature should have beautiful math. 

Also, physicists tend to look for symmetry when investigating new findings. An existence 
of symmetry often implies that there is a deeper level of structure to look for. For example,
 there is a disbalance of matter and antimatter in the Universe, and we perfectly now that because we and all we know consists of normal matter, and there is but a tiny fraction of antimatter in existence. To find out why, the scientists turn to symmetry, or more specifically try to find where it breaks. Remember AD? it is currently used to construct antihydrogen so as to compare the energy in the bonding between the protons and electrons and compare with normal hydrogen. If there is even a tiny difference, it might help uncover the mystery. 
*/


function dirac_eq(id){

  dirac_eq=(
    <p></p>

  );

  ReactDOM.render(
    dirac_eq, document.getElementById(id)
    );};


    function s_eq(id){

      s_eq=(
        <p></p>
    
      );
    
      ReactDOM.render(
        s_eq, document.getElementById(id)
        );};
    
function spin(id){

  spin=(
    <p></p>

  );

  ReactDOM.render(
    spin, document.getElementById(id)
    );};

    function big_bang(id){

      big_bang=(
        <p></p>
    
      );
    
      ReactDOM.render(
        big_bang, document.getElementById(id)
        );};

    function ang_mom(id){

      ang_mom=(
        <p></p>
    
      );
    
      ReactDOM.render(
        ang_mom, document.getElementById(id)
        );};
        


    function fusion(id){

      fusion=(
        <p></p>
    
      );
    
      ReactDOM.render(
        fusion, document.getElementById(id)
        );};
        
        function fields(id){

          fields=(
            <p>There are three types of fields: gravitational, magnetic and electric, and with that magnetic and electric are essentially the same forces, the difference is only that magnetic work in loops because they always have both positive and negative end, and electric work in or out.  An electron can create electric field. This electric field would attract positive charges and repel negative charges. This can be represented by the direction of arrows on these diagrams, the model suggested by Faraday. A field has an infinite range of force, its power decreases in inverse proportion to the area (square of distance from the source.) </p>
        
          );
        
          ReactDOM.render(
            fields, document.getElementById(id)
            );};


    function fundamental_forces(id){

      fundamental_forces=(
        <p></p>
    
      );
    
      ReactDOM.render(
        fundamental_forces, document.getElementById(id)
        );};

        function h_boson(id){

          h_boson=(
            <p>The Higgs boson, a particle discovered in 2012 that 
              completed the standard model and solved the 
              problem of asymmetric universe, was appeared 
              for the very first time on Earth in an accelerator</p>
        
          );
        
          ReactDOM.render(
            h_boson, document.getElementById(id)
            );};


        
        /*componentDidMount();{
          $(document).on('click','.accor >  .head',function(){
              `var closestDiv = $(this).closest('.accor');`
              `closestDiv.find('.body').slideToggle();`
          });
        };*/



export function chunksSliding(row, limit){

  
    let textForId='text'+row+'.';
          
    let objectArray=[];
          
          
          
          
    for(let n=1; n<=limit; n++){
            
            
      let slideId=textForId+n;
       let currentSlide=document.getElementById(slideId);
       objectArray.splice(n-1, 0, currentSlide);
        console.log(objectArray)
          
          
          
          };
          
          let index=0;
          
          const prevButName='pb'+row;
          const nextButName='nb'+row;
          
          $('#'+prevButName).on('click', ()=>{
          
            
            let currentSlide=objectArray[index];
              $(currentSlide).hide();
          
              let newIndex=objectArray.indexOf(currentSlide)+1;
              
          
              let newSlide=objectArray[newIndex];
              $(newSlide).show();
           
              if (newIndex>0){
                  $('#'+nextButName).show();
              };
              index+=1;
              if (newIndex===(limit-1)){
                $('#'+prevButName).hide();
              }
              
          
          
          });
          
          
          
          $('#'+nextButName).on('click', ()=>{
          
            
            let currentSlide=objectArray[index];
              $(currentSlide).hide();
          
              let newIndex=objectArray.indexOf(currentSlide)-1;
              
          
              let newSlide=objectArray[newIndex];
              $(newSlide).show();
           
              if (newIndex<limit){
                  $('#'+prevButName).show();
              };
              index-=1;
              if (newIndex===0){
                $('#'+nextButName).hide();
              }
              
          
          
          });
          
          };
        
        
        
        chunksSliding(1, 7);
        chunksSliding(2, 6);
        chunksSliding(3, 5);
        chunksSliding(4, 6);
        
        

        function newChunk(index, limit){
          let id_array=[];
          for(let i=1; i<=limit; i++){
          let id='text'+index+'.'+i;
          id_array[i-1]=id;


        };
        
          let newChunk=(
          <div class="mySlides fade">
          <div class='mySlides colorblock_l' style={{backgroundColor: '#a0c4ff'}} id={'chunk'+index}>
          
          <div class='articles' id={'text'+index+'.'+1}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>
          
          <div class='articles' id={'text'+index+'.'+2} style={{display: 'none'}}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>

          <div class='articles' id={'text'+index+'.'+3} style={{display: 'none'}}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>

          <div class='articles' id={'text'+index+'.'+4} style={{display: 'none'}}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>

          <div class='articles' id={'text'+index+'.'+5} style={{display: 'none'}}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>


          <div class='articles' id={'text'+index+'.'+6} style={{display: 'none'}}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>

          <div class='articles' id={'text'+index+'.'+7} style={{display: 'none'}}>
          <svg class='bookmark'><polygon points="0,0 50,0 50,40 25,20, 0,40" /></svg></div>

          <button type='button' class='prevButton' id={'pb'+index}>&#8249;</button>
          <button type='button' class='nextButton' id={'nb'+index}>&#8250;</button>
         </div>
          </div>
          
          );
          let cont_id='container'+(index-2);
          ReactDOM.render(
            newChunk, document.getElementById(cont_id)
            );



        };

        newChunk(4, 5);

function empty(id){

  let empty=(
    <p></p>

  );

  ReactDOM.render(
    empty, document.getElementById(id)
    );

};

function display_text(id, text){
  ReactDOM.render(
    text, document.getElementById(id)
    );

};

function nullify(){
  for(let i=1; i<=5; i++){
    let cont_id='container'+i;
    ReactDOM.render(
      '', document.getElementById(cont_id)
    );

  };
  for(let i=1; i<=3; i++){
    for(let j=1; j<=4; j++){
      let id='text'+i+'.'+j;
      ReactDOM.render(
        '', document.getElementById(id)
      )

    }
  }

};
        
        function title(topic){

        };
      
        //QUANT
        function black_body_radiation(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
          newChunk(4,6);
          chunksSliding(4, 6);


          black_body('text1.1');
          em_specrum('text1.2');
          
          empty('text3.1');
          //empty('text4.1');
        
        };
        
        
        function photoelectric_effect(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);




        };
        function heizenberg_uncertainty(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        
        function Shroedingers_equation(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function feynman_diagrams(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
              
        function quantum_electrodynamics(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
          newChunk(4, 5);
          chunksSliding(4, 5);



          qed('text1.1');
          symmetry('text2.1');
          
          display_text('text3.1', 'In QED, in a field the electrons exchange virtual photons. Sound difficult, but it is really not. You see, what we should find in a field is energy. In QED, energy can be represented as particles exchanging photons. An electron randomly emits a photon, and another electron absorbs it. Thus, the first electron has less energy and the second one – more. But this is only briefly, because at the next fraction of a second some different photon would pass on an electron to it. The elections in the field are just passing on this electron to each other like in ping pong game. The idea of this photon being “virtual” is actually just that it exists very briefly, essentially solely for the exchange. And obviously, as we are dealing with photons, the transitions happen at the speed of light. So, to understand the quantum field theory, the physicists needed to relate relativity and quantum mechanics somehow. When we talked about Schrodinger’s equation, I told you that that equation explained everything in the known physics but relativity. Well, this one does not go just as broad, but it related the two adversary fields of science together.')
          fields('text3.2');
          s_eq('text3.3');

          antimatter('text4.2');



        };
        function higgs_boson(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);

          standard_model('text1.2');

        };

        function s_model(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);

          standard_model('text1.1');
          neutrino('text2.2');
          bohrs_model('text1.2');
          fundamental_forces('text2.1');;



        }
                
        //ATOM
        function atomic_models(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        
          bohrs_model('text1.1');
          energy_levels('text2.1');
          emission_spectra('text2.2');
          
        
        
        
        };
        function bremstrauhlang_radiation(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function ruth_model(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };

        function p_colliders(){
          nullify();
          chunksSliding(1, 1);
          chunksSliding(2, 4);
          chunksSliding(3, 1);
          newChunk(4, 5);
          chunksSliding(4, 5);
          newChunk(5, 3);
          chunksSliding(5, 3);
          newChunk(6, 5);
          chunksSliding(6, 5);

          cern('text1.1');
          standard_model('text2.2');
          display_text('text2.1', 'Similar conditions occured at the Big Bang');
          big_bang('text2.2');
          fusion('text2.3');
          h_boson('text2.4');

          display_text('text3.1', 'There are several accelerators, not only just the Large Hadron Collider, which is the largest, the most powerful collider and the most famous in the world. Accelerators use an electromagnetic field to accelerate particles. The electromagnetic field is contained within metallic chambers known as radiofrequency cavities. When the particles pass through the RF’s, they receive an electrical impulse that accelerates them. The LHC’s RF cavities bring the 450 GeV energy of the particles (1 GeV = 1 billion electronvolts) to 6.5 TeV (1 TeV = 1 million million electronvolts) - more than 14 times their injection energy. The field itself is oscillating at a certain frequency, so everything needs to be timed perfectly as the particle needs to arrive when the field is moving in forward direction and not backward.');
          display_text('text4.1', 'The energies and velocities of all particles are carefully controlled. Once the particles reach the velocity needed, they are assembled in “bunches”. As the bunches are made of the same type of particles, they obviously have a homogenous charge. So, they can be controlled by a magnetic field. As the energies become higher, the accelerators need to become bigger. So, in particle physics, size matters. At some point, there were colliders that were straight, and not donut-shaped as now. This reduced the cost for the magnetic field control, but at the speeds considered, it needs to be unfeasibly long. Inside the accelerator, two high-energy particle beams travel at close to the speed of light before they are made to collide. The beams travel in opposite directions in separate beam pipes – two tubes kept at ultrahigh vacuum. They are guided around the accelerator ring by a strong magnetic field maintained by superconducting electromagnets.');

          
          super_cond('text4.2');

          display_text('text5.1', 'The accelerators are different by their maximum energy, luminosity and, notably, the type of particle. An accelerator can work with various different particles, but only if they have an electric charge, as otherwise they could not be controlled by the magnets. Some of the particles used include protons, ions (like the nuclei of argon and xenon). As they race around the LHC, the protons acquire an energy of 6.5 million million electronvolts, known as 6.5 tera-electronvolts or TeV. It is a weird unit of energy. In terms of quantum world, this is a huge, unimaginably huge unit of particles moving at the speed of light and constantly being accelerated. But, as compared to our macroscopic world, this is a miniscule energy…1eV = 1.6 * 10 -19 J. 6.5*1012  * 1.6 * 10 -19 J = 1,04 * 10 -6 J. A common lightbulb needs about 1 J to be lit for 1 s');

          antimatter('text5.3');







        };
        
        
        
        //COSMO
        function supernovae(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function black_holes(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function big_bang_theory(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function star_formation(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function thermonuclear_fusion(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function galaxies(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function expansion_of_the_universe(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function space_time_curvature(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        
        
        
        //COMPS
        function quantum_computers(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);};
        function turing_machines(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);};
        function q_comp_lang(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function q_teleporatiuon(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function q_algorithms(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };
        function shors_alg(){
          nullify();
          chunksSliding(1, 7);
          chunksSliding(2, 6);
          chunksSliding(3, 5);
        };








        //$('#atomic_models').on('click', atomic_models());
        //


/*nullify();
$('#atomic_models').on('click', atomic_models());
$('#black_body').on('click', black_body_radiation());*/
        
        











class TopMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="TopMenu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div class='nav-menu hide' id='nav-dropdown1'>

<span class='titles1'>
  <ul>
    <li id='black_body' onClick={black_body_radiation}>Black body radiation</li>
    <li id='photoelectric_effect'>Photoelectric effect</li>
    <li><a href=''><button id='atomic_models'>Atomic models</button></a></li>
    </ul></span>

    <span class='titles2'>
    <ul>
    <li id='h_uncertainty'>Heisenberg's uncertainty principle</li>
    <li id='scroedinger_eq'>Shroedinger's equation</li>
    <li id='feynman'>Feynman diagrams</li>
  </ul></span>

  <span class='titles3'>
    <ul>
    <li id='qed'>Quantum electrodynamics</li>
    <li id='higgs'>Higg's boson</li>
    <li id='s_model'>Standard model</li>
  </ul></span>


  

</div>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default IndexPage, chunksSliding
