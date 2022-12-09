const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Select the type of ticket to create.')
					.addOptions([
						{
							label: '🤝 | Partenariat',
							description: 'Ouvre un Ticket pour les partenariats',
							value: 'partenariat',
						},
						{
							label: '❓ | Aide',
							description: 'Ouvre un Ticket pour demander de l\'aide au staff',
							value: 'plainte',
						},
                        {
							label: '👥 | Recrutement',
							description: 'Ouvre un Ticket pour une candid',
							value: 'recrutement',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'GL | Ticket',
                description: '**__Comment ouvrir un ticket :__**\nChoisis un des types de tickets en-dessous',
                color: "BLURPLE",
                footer: {text: 'Game\'s Life'}
            }],
            components: [row]
        })
    }
}
