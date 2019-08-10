#!/bin/sh

`# Author: Dzintars Klavins
# This script will create a new tmux session (or attach existing)
# for developing current project.
# https://daniel-siepmann.de/Posts/2016-05-15-tmux.html`

SESSION="dev"
PROJECT_PATH="/home/dzintars/Go/src/github.com/oswee/srp"
tmux new-session -s $SESSION -n 'kafka' -d
tmux new-window -t $SESSION:1 -n 'stakeholders'
tmux new-window -t $SESSION:2 -n 'projects'
tmux new-window -t $SESSION:3 -n 'routes'
tmux new-window -t $SESSION:4 -n 'orders'
tmux new-window -t $SESSION:5 -n 'messages'
tmux new-window -t $SESSION:6 -n 'metrics'
tmux new-window -t $SESSION:7 -n 'signup'
tmux new-window -t $SESSION:8 -n 'apps'

tmux select-window -t $SESSION:0
tmux send-keys 'cd /home/dzintars/kafka_2.12-2.1.0; zookeeper-server-start.sh config/zookeeper.properties' C-m
tmux split-window -h
tmux send-keys 'sleep 4; cd /home/dzintars/kafka_2.12-2.1.0; kafka-server-start.sh config/server.properties' C-m

tmux select-window -t $SESSION:1
tmux send-keys 'cd $PROJECT_PATH/commands/stakeholder; go run main.go' C-m
tmux split-window -h
tmux send-keys 'sleep 10; cd $PROJECT_PATH/event-handlers/stakeholder; go run main.go' C-m
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v
tmux send-keys 'sleep 10; cd $PROJECT_PATH/denormalizers/stakeholder; go run main.go' C-m

tmux select-window -t $SESSION:2
tmux send-keys 'cd $PROJECT_PATH/commands/shipping-project; go run main.go' C-m
tmux split-window -h
tmux send-keys 'sleep 10; cd $PROJECT_PATH/event-handlers/shipping-project; go run main.go' C-m
tmux split-window -v
tmux send-keys 'cd $PROJECT_PATH/queries/projects; go run main.go' C-m
tmux select-pane -t 0
tmux split-window -v
tmux send-keys 'sleep 10; cd $PROJECT_PATH/denormalizers/shipping-project; go run main.go' C-m

tmux select-window -t $SESSION:3
tmux send-keys 'cd $PROJECT_PATH/commands/route; go run main.go' C-m
tmux split-window -h
tmux send-keys 'sleep 10; cd $PROJECT_PATH/event-handlers/routes; go run main.go' C-m
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v
tmux send-keys 'cd $PROJECT_PATH/queries/routes; go run main.go' C-m

tmux select-window -t $SESSION:4
tmux send-keys 'cd $PROJECT_PATH/commands/delivery-order; go run main.go' C-m
tmux split-window -h
tmux send-keys 'sleep 10; cd $PROJECT_PATH/event-handlers/delivery-orders; go run main.go' C-m
tmux split-window -v
tmux select-pane -t 0
tmux split-window -v
tmux send-keys 'cd $PROJECT_PATH/queries/delivery-orders; go run main.go' C-m

tmux select-window -t $SESSION:5
tmux send-keys 'cd $PROJECT_PATH/commands/messages; go run main.go' C-m
tmux split-window -h
tmux send-keys 'sleep 10; cd $PROJECT_PATH/event-handlers/messages; go run main.go' C-m

tmux select-window -t $SESSION:6
tmux send-keys 'cd $PROJECT_PATH/commands/page-view; go run main.go' C-m

tmux select-window -t $SESSION:7
tmux send-keys 'cd $PROJECT_PATH/commands/signin; go run main.go' C-m
tmux split-window -h
tmux send-keys 'cd $PROJECT_PATH/commands/signup; go run main.go' C-m
tmux split-window -v
tmux send-keys 'sleep 10; cd $PROJECT_PATH/event-handlers/signup; go run main.go' C-m
tmux select-pane -t 0
tmux split-window -v
tmux send-keys 'cd $PROJECT_PATH/queries/signin; go run main.go' C-m

tmux select-window -t $SESSION:8
tmux send-keys 'cd $PROJECT_PATH/queries/app; go run main.go' C-m


tmux attach -t $SESSION
