
i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
W
e
b
3
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
w
e
b
3
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
E
d
u
c
a
t
i
o
n
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
e
d
u
c
a
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
G
a
m
i
n
g
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
g
a
m
i
n
g
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
G
o
v
e
r
n
m
e
n
t
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
g
o
v
e
r
n
m
e
n
t
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
R
e
s
e
a
r
c
h
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
r
e
s
e
a
r
c
h
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
G
l
o
b
a
l
Y
o
u
t
h
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
g
l
o
b
a
l
-
y
o
u
t
h
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
U
n
i
v
e
r
s
i
t
y
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
u
n
i
v
e
r
s
i
t
y
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
A
c
c
e
l
e
r
a
t
o
r
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
a
c
c
e
l
e
r
a
t
o
r
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
C
l
i
m
a
t
e
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
c
l
i
m
a
t
e
"
;


i
m
p
o
r
t
 
{
 
g
r
a
n
t
s
A
i
D
e
e
p
T
e
c
h
 
}
 
f
r
o
m
 
"
.
/
g
r
a
n
t
s
-
a
i
-
d
e
e
p
t
e
c
h
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
G
r
a
n
t
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
d
e
a
d
l
i
n
e
:
 
s
t
r
i
n
g
;


 
 
o
r
g
a
n
i
z
a
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
l
o
g
o
:
 
s
t
r
i
n
g
;


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
f
u
n
d
i
n
g
A
m
o
u
n
t
:
 
s
t
r
i
n
g
;


 
 
c
a
t
e
g
o
r
y
:
 
G
r
a
n
t
C
a
t
e
g
o
r
y
;


 
 
t
a
g
s
:
 
s
t
r
i
n
g
[
]
;


 
 
w
e
b
s
i
t
e
:
 
s
t
r
i
n
g
;


 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
s
t
r
i
n
g
[
]
;


 
 
s
t
a
t
u
s
:
 
"
A
c
t
i
v
e
"
 
|
 
"
P
a
u
s
e
d
"
 
|
 
"
I
n
v
i
t
e
 
O
n
l
y
"
;


 
 
e
c
o
s
y
s
t
e
m
:
 
s
t
r
i
n
g
;


 
 
h
i
g
h
l
i
g
h
t
s
:
 
s
t
r
i
n
g
[
]
;


}




e
x
p
o
r
t
 
t
y
p
e
 
G
r
a
n
t
C
a
t
e
g
o
r
y
 
=


 
 
|
 
"
W
e
b
3
"


 
 
|
 
"
G
a
m
i
n
g
"


 
 
|
 
"
E
d
u
c
a
t
i
o
n
"


 
 
|
 
"
G
o
v
e
r
n
m
e
n
t
"


 
 
|
 
"
R
e
s
e
a
r
c
h
"


 
 
|
 
"
G
l
o
b
a
l
 
Y
o
u
t
h
"


 
 
|
 
"
U
n
i
v
e
r
s
i
t
y
"


 
 
|
 
"
A
c
c
e
l
e
r
a
t
o
r
"


 
 
|
 
"
C
l
i
m
a
t
e
"


 
 
|
 
"
A
I
 
&
 
D
e
e
p
 
T
e
c
h
"
;




e
x
p
o
r
t
 
c
o
n
s
t
 
G
R
A
N
T
_
C
A
T
E
G
O
R
I
E
S
:
 
G
r
a
n
t
C
a
t
e
g
o
r
y
[
]
 
=
 
[


 
 
"
G
o
v
e
r
n
m
e
n
t
"
,


 
 
"
A
I
 
&
 
D
e
e
p
 
T
e
c
h
"
,


 
 
"
C
l
i
m
a
t
e
"
,


 
 
"
A
c
c
e
l
e
r
a
t
o
r
"
,


 
 
"
U
n
i
v
e
r
s
i
t
y
"
,


 
 
"
G
l
o
b
a
l
 
Y
o
u
t
h
"
,


 
 
"
R
e
s
e
a
r
c
h
"
,


 
 
"
W
e
b
3
"
,


 
 
"
E
d
u
c
a
t
i
o
n
"
,


 
 
"
G
a
m
i
n
g
"
,


]
;




e
x
p
o
r
t
 
c
o
n
s
t
 
g
r
a
n
t
s
:
 
G
r
a
n
t
[
]
 
=
 
[


 
 
.
.
.
g
r
a
n
t
s
W
e
b
3
,


 
 
.
.
.
g
r
a
n
t
s
E
d
u
c
a
t
i
o
n
,


 
 
.
.
.
g
r
a
n
t
s
G
a
m
i
n
g
,


 
 
.
.
.
g
r
a
n
t
s
G
o
v
e
r
n
m
e
n
t
,


 
 
.
.
.
g
r
a
n
t
s
R
e
s
e
a
r
c
h
,


 
 
.
.
.
g
r
a
n
t
s
G
l
o
b
a
l
Y
o
u
t
h
,


 
 
.
.
.
g
r
a
n
t
s
U
n
i
v
e
r
s
i
t
y
,


 
 
.
.
.
g
r
a
n
t
s
A
c
c
e
l
e
r
a
t
o
r
,


 
 
.
.
.
g
r
a
n
t
s
C
l
i
m
a
t
e
,


 
 
.
.
.
g
r
a
n
t
s
A
i
D
e
e
p
T
e
c
h
,


]
;


