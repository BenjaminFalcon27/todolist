namespace :app do
    desc "This task is called by Heroku every day"
    task :reset_project => :environment do
        puts 'launch'
        
        # Delete all todo_lists
        TodoList.destroy_all

        # Lists
        todo_lists = [
            { 
                :title   => 'Pets',
                :entries => [
                    'cat',
                    'dog',
                    'bear',
                    'parrot'
                ]
            },
            { 
                :title   => 'Food',
                :entries => [
                    'salad',
                    'tomatoes',
                    'pears',
                    'apples',
                    'bananas'
                ]
            },
            {
                :title   => 'Movies', 
                :entries => [
                    'Saw',
                    'Joker',
                    'Jason 1963',
                    'Berserk movie'
                ]
            },   
            {
                :title   => 'Musics',
                :entries => [
                    'Simple man',
                    'Free Bird',
                    'Ready to Fly',
                    'Keeping the faith',
                    'White knuckle ride'
                ]
            },   
            {
                :title   => 'animes',
                :entries => [
                    'Berserk',
                    'Snk',
                    'One piece',
                    'Fire Punch',
                    'Chainsaw man',
                    'Jujutsu Kaisen',
                    'Demon Slayer'
                ]

            }      
        ]
        
        todo_lists.each do |todo_list|
            todo_lists = TodoList.create title: todo_list[:title]
            entries = todo_list[:entries]
            entries.each do |list|
                entry = Entry.create(
                    name: list,
                    todo_list_id: todo_lists.id,
                    done: [true, false].sample
                )
            end 
        end
        puts 'landing'
    end
end
