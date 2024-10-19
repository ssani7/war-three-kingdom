import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png';
import DividerWithText from '@/components/DividerWithText';
import emma from '@/assets/team/emma.png';
import marco from '@/assets/team/marco.png';
import jason from '@/assets/team/jason.png';

const team = [
	{ name: 'Emma Han', photo: emma, designation: 'Founder/CEO', desc: ['Over 10 years of game development experience', 'Led 2 successful RPG games and blockchain projects'] },
	{ name: 'Marco', photo: marco, designation: 'TECHNICAL DIRECTOR/CTO', desc: ['Game Development 20 years', 'Extensive blockchain development and smart contract design experience.'] },
	{ name: 'JASON', photo: jason, designation: 'GAME DESIGNER', desc: ['Senior strategy game designe', 'Participated in the development of several successful Three Kingdoms-themed games.'] },
];

const page = () => {
	return (
		<div className="pt-32  max-w-[75%] m-auto">
			<p className="text-4xl text-primary text-center">STORY OF War Three Kingdom</p>
			<p className="text-4xl pt-6 text-center">EXPLORE NEW PLANETS</p>
			<div className="w-2/3 m-auto flex flex-col gap-5 mb-10 font-space text-center">
				<p className="text-lg mt-10">
					Earth is in peril as it is hit by a massive solar storm that threatens to destroy all life on the planet. In a desperate attempt to save humanity, the government has launched various
					missions to explore new planets for possible settlement.
				</p>

				<p className="text-lg">
					What they didn’t know. going into this mission was that each planet has unique challenges and dangers, from scorching sun rays, freezing conditions, radioactive explosions, insuffucient
					oxygen, supersonic winds and acid rains.
				</p>

				<p className="text-lg">
					The goal of the game is to act as a team to explore and conquer new planets, while fighting other groups of migrating humans trying to survive and escape the planet’s hardships with limited
					time. The player must ensure the survival of their team as they travel from planet to planet, gathering resources and upgrading their technology.
				</p>
			</div>

			<div className="flex flex-col items-center gap-4 border-[0.5px] border-primary rounded-xl pt-10 pb-0 overflow-hidden w-2/3 mx-auto">
				<p className="font-space text-3xl text-primary">CREATED WITH FUTURE TECHNOLOGIES</p>
				<p className="font-space marker:text-primary">Presented by War Three Kingdom</p>
				<Image height={700} width={700} src={banner} alt="author avatar" className="w-full h-full object-cover border-b border-gray-500" />
			</div>

			<div className="w-2/3 m-auto flex flex-col gap-5 mb-10 font-space text-center">
				<p className="text-lg mt-10">
					Earth is in peril as it is hit by a massive solar storm that threatens to destroy all life on the planet. In a desperate attempt to save humanity, the government has launched various
					missions to explore new planets for possible settlement.
				</p>

				<p className="text-lg">
					What they didn’t know. going into this mission was that each planet has unique challenges and dangers, from scorching sun rays, freezing conditions, radioactive explosions, insuffucient
					oxygen, supersonic winds and acid rains.
				</p>

				<p className="text-lg">
					The goal of the game is to act as a team to explore and conquer new planets, while fighting other groups of migrating humans trying to survive and escape the planet’s hardships with limited
					time. The player must ensure the survival of their team as they travel from planet to planet, gathering resources and upgrading their technology.
				</p>
			</div>

			<div className="py-5 w-1/2 m-auto font-mont text-5xl text-center">
				<DividerWithText>
					<p className="font-light">THE TEAM</p>
				</DividerWithText>
			</div>

			<p className="font-space text-center">We are constantly continuing to improve ourselves with our flawless vision and innovative perspective that will shape the future.</p>

			<div className="grid grid-cols-12 gap-10">
				{team.map((n) => (
					<div key={n.name} className="py-5 flex flex-col gap-6 col-span-4 h-[65vh] ">
						<div className="flex flex-col items-center gap-4 border-[0.5px] border-gray-500 rounded-xl py-10 overflow-hidden h-full hover:shadow-lg hover:shadow-primary">
							<Image height={800} width={800} src={n.photo} alt="author avatar" className="w-full h-[300px] object-contain border-b border-gray-500" />
							<div className="flex flex-col gap-1 px-10">
								<p className="font-space text-end text-3xl uppercase font-bold text-primary">{n.name}</p>
								<p className="font-space text-end text-lg">{n.designation}</p>
								<ul className="mt-4">
									{n.desc.map((desc) => (
										<li key={desc} className="font-space marker:text-primary text-sm pb-3">
											{desc}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
