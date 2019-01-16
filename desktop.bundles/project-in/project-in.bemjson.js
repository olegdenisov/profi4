module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'project-in.min.css' },
		{ elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'project-in.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'p4', space: 'default', size: 'p4', gap: 'small', menu: 'default', breakpoint: 'default', font: 'roboto' }
		},
	],
	content: [
		{
			block: 'tpl-layout',
			content: [
				{
					elem: 'container',
					elemMods: { size: 'm', align: 'center' },
					content: [
						{
							block: 'header',
							changeUrl: '../gpn-project-in/gpn-project-in.html'
						},
					]
				},
				{
					elem: 'container',
					elemMods: { size: 'm', align: 'center' },
					mix: { block: 'decorator', mods: { 'space-t': 'xxxxxl' }},
					content: [
						{
							block: 'tpl-grid',
							mods: { 'col-gap': 'full', 'row-gap': 'half', 'row-gap': 'half', 'columns': '12' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' }},
							content: [
								{
									elem: 'fraction',
									elemMods: { col: '8' },
									content: [
										{
											block: 'tag',
											mods: { size: 's' },
											content: 'Капитальное строительство'
										},
										{
											block: 'tag',
											mods: { size: 's' },
											content: 'IT-разработка'
										},
										{
											block: 'tag',
											mods: {size: 's' },
											content: 'Нефть и газ'
										},
										{
											block: 'text',
											mods: { size: 'xxxl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-t': 'm', 'indent-b': 'xl' }},
											content: 'Создание инструмента для оценки хода строительства на основании данных с беспилотных летательных аппаратов'
										},
										{
											block: 'text',
											mods: { size: 'xs', transform: 'uppercase', weight: 'semibold', spacing: 'xs', view: 'secondary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
											content: 'Сроки проекта'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
											content: '01.12.2018–01.06.2019'
										},
										{
											content: [
												{
													block: 'text',
													mods: { size: 'xl', weight: 'bold', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
													content: 'Заказчики'
												},
												{
													block: 'tpl-grid',
													mods: { 's-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'half' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_1.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Самсонов Сергей Николаевич'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Начальник Департамента капитального строительства'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'samsonov@gpn.ru'
																		},
																	]
																}
															]
														},
													]
												},
											]
										},
										{
											content: [
												{
													block: 'text',
													mods: { size: 'xl', weight: 'bold', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
													content: 'Эксперты'
												},
												{
													block: 'tpl-grid',
													mods: { 's-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'half' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_2.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Самойлов Дмитрий Николаевич'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Руководитель направления по внедрению лучших практик в капитальном строительстве Департамента капитального строительства ДЗиКС'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'samoilov@gpn.ru'
																		},
																	]
																}
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_4.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Кукушкина Мария Петровна'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Руководитель направления по развитию МТО, Управление методологии и развития МТО'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'kukushkinamp@gpn.ru'
																		},
																	]
																}
															]
														}
													]
												},
											]
										},
										{
											content: [
												{
													block: 'text',
													mods: { size: 'xl', weight: 'bold', view: 'primary' },
													mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
													content: 'Команда'
												},
												{
													block: 'tpl-grid',
													mods: { 's-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'half' },
													mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' }},
													content: [
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_3.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Мишин Виталий Николаевич'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Руководитель Департамента капитального строительства ДЗиКС'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'mishinvn@gpn.ru'
																		},
																	]
																}
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_5.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Улюкаева Екатерина Олеговна'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Руководитель направления по развитию и методологии'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'ulyukaeva@gpn.ru'
																		},
																	]
																}
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_6.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Коробкина Виолета Николаевна'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Руководитель Департамента капитального строительства ДЗиКС'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'korobkina@gpn.ru'
																		},
																	]
																}
															]
														},
														{
															block: 'pt-icon-plus',
															mods: { 'vertical-align': 'top' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		attrs: { style: 'display: block; width: 60px; height: 60px' },
																		url: '../../assets/avatar_7.png'
																	},
																},
																{
																	elem: 'block',
																	content: [
																		{
																			block: 'text',
																			mods: { size: 'm', view: 'primary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Доренко Семён Петрович'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'secondary' },
																			mix: { block: 'decorator', mods: { 'indent-b': 'xxs' }},
																			content: 'Руководитель отдела аналитики'
																		},
																		{
																			block: 'text',
																			mods: { size: 's', view: 'primary' },
																			content: 'dorenkosp@gpn.ru'
																		},
																	]
																}
															]
														}
													]
												},
											]
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Описание проекта'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											content: 'Автоматизированная оценка хода строительства на основании полученных данных с беспилотных летательных аппаратов:'
										},
										{
											tag: 'ul',
											attrs: { style: 'padding-left: 20px' },
											block: 'decorator', mods: { 'indent-b': 'xxxl' },
											content: [
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: [
														'Расчет количества погруженных свай (до 8000 свай на обьекте):',
														{
															tag: 'ul',
															attrs: { style: 'padding-left: 20px' },
															content: [
																{
																	block: 'text',
																	tag: 'li',
																	mods: { size: 'l', view: 'primary' },
																	content: 'Количество свай на участке на момент облета БРЛА'
																},
																{
																	block: 'text',
																	tag: 'li',
																	mods: { size: 'l', view: 'primary' },
																	content: 'Отчет о динамике изменения количества свай на участке'
																},
															]
														},
													]
												},
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: [
														'Расчет показателей о прокладке магистральных трубопроводов:',
														{
															tag: 'ul',
															attrs: { style: 'padding-left: 20px' },
															content: [
																{
																	block: 'text',
																	tag: 'li',
																	mods: { size: 'l', view: 'primary' },
																	content: 'Длина трубопровода (км)'
																}
															]
														},
													]
												},
											]
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Ожидаемый результат'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
											content: 'Прототип программного продукта'
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Критерии приемки результата разработки'
										},
										{
											tag: 'ul',
											attrs: { style: 'padding-left: 20px' },
											block: 'decorator', mods: { 'indent-b': 'xxxl' },
											content: [
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: 'Практическая реализуемость идеи.'
												},
												{
													block: 'text',
													tag: 'li',
													mods: { size: 'l', view: 'primary' },
													content: 'Наличие работающего прототипа который на основании данных с БЛПА позволяет получать: отчет о динамике изменений в количестве свай на объекте, отчет о динамике изменения длины трубопроводов.'
												},
											]
										},
										{
											block: 'text',
											mods: { size: 'xl', weight: 'bold', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
											content: 'Исходные данные и материалы'
										},
										{
											block: 'text',
											mods: { size: 'l', view: 'primary' },
											mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
											content: 'Заказчиком будут предоставлены доступ к видео и фоторесурсам: записи, трансляции и прочее, демонстрирующее облет площадки. '
										},
									]
								},
								{
									elem: 'fraction',
									elemMods: { col: '4' },
									content: [
										{
											block: 'section',
											mods: { view: 'gray' },
											attrs: { style: 'position: fixed; z-index: -1; bottom: 0; right: 0; height: 100vh; display: flex; align-items: flex-end' },
											content: {
											}
										},
									]
								},
							]
						},
					]
				},
			]
		}
	]
};