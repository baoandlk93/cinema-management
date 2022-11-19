package projectbackend.service.room;

import projectbackend.dto.room.IRoomDto;

import java.util.List;

public interface IRoomService {
    List<IRoomDto> findAllRoom(String name);
    IRoomDto findRoomById(String id);
}
