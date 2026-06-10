
i
m
p
o
r
t
 
f
i
r
s
t
P
r
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
o
p
e
n
-
s
o
u
r
c
e
-
g
u
i
d
e
.
j
s
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
 
g
i
t
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
g
i
t
-
c
h
e
a
t
s
h
e
e
t
.
j
s
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
 
c
o
m
m
u
n
i
c
a
t
i
o
n
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
c
o
m
m
u
n
i
c
a
t
i
o
n
-
t
e
m
p
l
a
t
e
s
.
j
s
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
 
c
o
d
e
b
a
s
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
c
o
d
e
b
a
s
e
-
g
u
i
d
e
.
j
s
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
 
c
i
c
d
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
c
i
c
d
-
g
u
i
d
e
.
j
s
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
 
g
s
o
c
P
r
o
p
o
s
a
l
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
g
s
o
c
-
p
r
o
p
o
s
a
l
-
g
u
i
d
e
.
j
s
o
n
"
;




t
y
p
e
 
G
u
i
d
e
S
t
e
p
 
=
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
?
:
 
n
u
m
b
e
r
;


}
;




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
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
 
=


 
 
|
 
"
f
i
r
s
t
-
p
r
"


 
 
|
 
"
g
i
t
-
g
u
i
d
e
"


 
 
|
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
"


 
 
|
 
"
r
e
p
o
-
d
i
s
c
o
v
e
r
y
"


 
 
|
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
"


 
 
|
 
"
c
i
c
d
"


 
 
|
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"


 
 
|
 
"
g
s
o
c
-
o
r
g
s
"


 
 
|
 
"
g
i
t
h
u
b
-
o
a
u
t
h
"


 
 
|
 
"
l
e
a
d
e
r
b
o
a
r
d
"


 
 
|
 
"
m
e
n
t
o
r
-
p
r
o
g
r
a
m
"
;




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
 
L
e
a
r
n
i
n
g
P
a
t
h
I
d
 
=
 
"
f
i
r
s
t
-
c
o
n
t
r
i
b
u
t
o
r
"
 
|
 
"
g
s
o
c
-
r
e
a
d
y
"
 
|
 
"
o
s
s
-
r
e
g
u
l
a
r
"
;




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
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
 
=
 
{


 
 
s
l
u
g
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
;


 
 
t
i
t
l
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


 
 
h
r
e
f
:
 
s
t
r
i
n
g
;


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
n
u
m
b
e
r
;


 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
 
|
 
"
m
i
l
e
s
t
o
n
e
"
;


 
 
c
o
m
p
l
e
t
i
o
n
:


 
 
 
 
|
 
{
 
t
y
p
e
:
 
"
f
i
r
s
t
-
p
r
"
;
 
t
o
t
a
l
S
t
e
p
s
:
 
n
u
m
b
e
r
 
}


 
 
 
 
|
 
{
 
t
y
p
e
:
 
"
l
o
c
a
l
S
t
o
r
a
g
e
S
e
t
"
;
 
s
t
o
r
a
g
e
K
e
y
:
 
s
t
r
i
n
g
;
 
t
o
t
a
l
S
t
e
p
s
:
 
n
u
m
b
e
r
 
}


 
 
 
 
|
 
{
 
t
y
p
e
:
 
"
m
i
l
e
s
t
o
n
e
"
;
 
m
i
l
e
s
t
o
n
e
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
 
}
;


}
;




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
 
L
e
a
r
n
i
n
g
P
a
t
h
 
=
 
{


 
 
i
d
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
d
;


 
 
t
i
t
l
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


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
n
u
m
b
e
r
;


 
 
s
l
u
g
s
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
[
]
;


 
 
i
t
e
m
s
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
[
]
;


}
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
 
L
E
A
R
N
I
N
G
_
P
A
T
H
_
S
E
L
E
C
T
E
D
_
K
E
Y
 
=
 
"
s
e
l
e
c
t
e
d
P
a
t
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
 
L
E
A
R
N
I
N
G
_
P
A
T
H
_
M
I
L
E
S
T
O
N
E
S
_
K
E
Y
 
=
 
"
l
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
s
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
 
L
E
A
R
N
I
N
G
_
P
A
T
H
_
P
R
O
G
R
E
S
S
_
E
V
E
N
T
 
=
 
"
l
e
a
r
n
i
n
g
-
p
a
t
h
-
p
r
o
g
r
e
s
s
"
;




c
o
n
s
t
 
G
U
I
D
E
_
S
T
O
R
A
G
E
_
K
E
Y
S
 
=
 
{


 
 
g
i
t
:
 
"
g
i
t
-
c
h
e
a
t
s
h
e
e
t
-
c
o
m
p
l
e
t
e
d
"
,


 
 
c
o
m
m
u
n
i
c
a
t
i
o
n
:
 
"
c
o
m
m
-
t
e
m
p
l
a
t
e
s
-
c
o
m
p
l
e
t
e
d
"
,


 
 
c
o
d
e
b
a
s
e
:
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
-
c
o
m
p
l
e
t
e
d
"
,


 
 
c
i
c
d
:
 
"
c
i
c
d
-
g
u
i
d
e
-
c
o
m
p
l
e
t
e
d
"
,


 
 
g
s
o
c
P
r
o
p
o
s
a
l
:
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
-
r
o
a
d
m
a
p
-
c
o
m
p
l
e
t
e
d
"
,


}
 
a
s
 
c
o
n
s
t
;




f
u
n
c
t
i
o
n
 
s
u
m
M
i
n
u
t
e
s
(
s
t
e
p
s
:
 
G
u
i
d
e
S
t
e
p
[
]
)
 
{


 
 
r
e
t
u
r
n
 
s
t
e
p
s
.
r
e
d
u
c
e
(
(
s
u
m
,
 
s
t
e
p
)
 
=
>
 
s
u
m
 
+
 
(
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
?
?
 
0
)
,
 
0
)
;


}




c
o
n
s
t
 
f
i
r
s
t
P
r
S
t
e
p
s
 
=
 
f
i
r
s
t
P
r
D
a
t
a
.
o
p
e
n
S
o
u
r
c
e
R
o
a
d
m
a
p
 
a
s
 
G
u
i
d
e
S
t
e
p
[
]
;


c
o
n
s
t
 
g
i
t
S
t
e
p
s
 
=
 
g
i
t
D
a
t
a
.
g
i
t
C
h
e
a
t
s
h
e
e
t
 
a
s
 
G
u
i
d
e
S
t
e
p
[
]
;


c
o
n
s
t
 
c
o
m
m
u
n
i
c
a
t
i
o
n
S
t
e
p
s
 
=
 
c
o
m
m
u
n
i
c
a
t
i
o
n
D
a
t
a
.
c
o
m
m
u
n
i
c
a
t
i
o
n
G
u
i
d
e
 
a
s
 
G
u
i
d
e
S
t
e
p
[
]
;


c
o
n
s
t
 
c
o
d
e
b
a
s
e
S
t
e
p
s
 
=
 
c
o
d
e
b
a
s
e
D
a
t
a
.
c
o
d
e
b
a
s
e
G
u
i
d
e
 
a
s
 
G
u
i
d
e
S
t
e
p
[
]
;


c
o
n
s
t
 
c
i
c
d
S
t
e
p
s
 
=
 
c
i
c
d
D
a
t
a
.
c
i
c
d
G
u
i
d
e
 
a
s
 
G
u
i
d
e
S
t
e
p
[
]
;


c
o
n
s
t
 
g
s
o
c
P
r
o
p
o
s
a
l
S
t
e
p
s
 
=
 
g
s
o
c
P
r
o
p
o
s
a
l
D
a
t
a
.
g
s
o
c
P
r
o
p
o
s
a
l
R
o
a
d
m
a
p
 
a
s
 
G
u
i
d
e
S
t
e
p
[
]
;




c
o
n
s
t
 
I
T
E
M
S
:
 
R
e
c
o
r
d
<
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
,
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
>
 
=
 
{


 
 
"
f
i
r
s
t
-
p
r
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
f
i
r
s
t
-
p
r
"
,


 
 
 
 
t
i
t
l
e
:
 
"
F
i
r
s
t
 
P
R
 
R
o
a
d
m
a
p
"
,


 
 
 
 
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
 
"
C
o
m
p
l
e
t
e
 
t
h
e
 
c
o
n
t
r
i
b
u
t
o
r
 
w
o
r
k
f
l
o
w
 
f
r
o
m
 
i
s
s
u
e
 
t
o
 
m
e
r
g
e
d
 
p
u
l
l
 
r
e
q
u
e
s
t
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
s
u
m
M
i
n
u
t
e
s
(
f
i
r
s
t
P
r
S
t
e
p
s
)
,


 
 
 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
f
i
r
s
t
-
p
r
"
,
 
t
o
t
a
l
S
t
e
p
s
:
 
f
i
r
s
t
P
r
S
t
e
p
s
.
l
e
n
g
t
h
 
}
,


 
 
}
,


 
 
"
g
i
t
-
g
u
i
d
e
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
g
i
t
-
g
u
i
d
e
"
,


 
 
 
 
t
i
t
l
e
:
 
"
G
i
t
 
C
h
e
a
t
s
h
e
e
t
"
,


 
 
 
 
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
 
"
P
r
a
c
t
i
c
e
 
t
h
e
 
G
i
t
 
c
o
m
m
a
n
d
s
 
a
n
d
 
P
R
 
h
y
g
i
e
n
e
 
u
s
e
d
 
b
y
 
o
p
e
n
-
s
o
u
r
c
e
 
c
o
n
t
r
i
b
u
t
o
r
s
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
i
t
-
g
u
i
d
e
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
s
u
m
M
i
n
u
t
e
s
(
g
i
t
S
t
e
p
s
)
,


 
 
 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
l
o
c
a
l
S
t
o
r
a
g
e
S
e
t
"
,
 
s
t
o
r
a
g
e
K
e
y
:
 
G
U
I
D
E
_
S
T
O
R
A
G
E
_
K
E
Y
S
.
g
i
t
,
 
t
o
t
a
l
S
t
e
p
s
:
 
g
i
t
S
t
e
p
s
.
l
e
n
g
t
h
 
}
,


 
 
}
,


 
 
c
o
m
m
u
n
i
c
a
t
i
o
n
:
 
{


 
 
 
 
s
l
u
g
:
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
m
m
u
n
i
c
a
t
i
o
n
 
T
e
m
p
l
a
t
e
s
"
,


 
 
 
 
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
 
"
U
s
e
 
m
a
i
n
t
a
i
n
e
r
-
f
r
i
e
n
d
l
y
 
t
e
m
p
l
a
t
e
s
 
f
o
r
 
i
s
s
u
e
s
,
 
P
R
s
,
 
a
n
d
 
r
e
v
i
e
w
 
r
e
p
l
i
e
s
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
s
u
m
M
i
n
u
t
e
s
(
c
o
m
m
u
n
i
c
a
t
i
o
n
S
t
e
p
s
)
,


 
 
 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
l
o
c
a
l
S
t
o
r
a
g
e
S
e
t
"
,
 
s
t
o
r
a
g
e
K
e
y
:
 
G
U
I
D
E
_
S
T
O
R
A
G
E
_
K
E
Y
S
.
c
o
m
m
u
n
i
c
a
t
i
o
n
,
 
t
o
t
a
l
S
t
e
p
s
:
 
c
o
m
m
u
n
i
c
a
t
i
o
n
S
t
e
p
s
.
l
e
n
g
t
h
 
}
,


 
 
}
,


 
 
"
r
e
p
o
-
d
i
s
c
o
v
e
r
y
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
r
e
p
o
-
d
i
s
c
o
v
e
r
y
"
,


 
 
 
 
t
i
t
l
e
:
 
"
R
e
p
o
 
D
i
s
c
o
v
e
r
y
"
,


 
 
 
 
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
 
"
F
i
n
d
 
b
e
g
i
n
n
e
r
-
f
r
i
e
n
d
l
y
 
r
e
p
o
s
i
t
o
r
i
e
s
 
t
h
a
t
 
m
a
t
c
h
 
y
o
u
r
 
s
k
i
l
l
s
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
2
0
,


 
 
 
 
k
i
n
d
:
 
"
m
i
l
e
s
t
o
n
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
m
i
l
e
s
t
o
n
e
"
,
 
m
i
l
e
s
t
o
n
e
:
 
"
r
e
p
o
-
d
i
s
c
o
v
e
r
y
"
 
}
,


 
 
}
,


 
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
"
,


 
 
 
 
t
i
t
l
e
:
 
"
R
e
a
d
 
C
o
d
e
b
a
s
e
 
G
u
i
d
e
"
,


 
 
 
 
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
 
"
B
u
i
l
d
 
a
 
r
e
p
e
a
t
a
b
l
e
 
m
e
t
h
o
d
 
f
o
r
 
n
a
v
i
g
a
t
i
n
g
 
u
n
f
a
m
i
l
i
a
r
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
r
e
a
d
-
c
o
d
e
b
a
s
e
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
s
u
m
M
i
n
u
t
e
s
(
c
o
d
e
b
a
s
e
S
t
e
p
s
)
,


 
 
 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
l
o
c
a
l
S
t
o
r
a
g
e
S
e
t
"
,
 
s
t
o
r
a
g
e
K
e
y
:
 
G
U
I
D
E
_
S
T
O
R
A
G
E
_
K
E
Y
S
.
c
o
d
e
b
a
s
e
,
 
t
o
t
a
l
S
t
e
p
s
:
 
c
o
d
e
b
a
s
e
S
t
e
p
s
.
l
e
n
g
t
h
 
}
,


 
 
}
,


 
 
c
i
c
d
:
 
{


 
 
 
 
s
l
u
g
:
 
"
c
i
c
d
"
,


 
 
 
 
t
i
t
l
e
:
 
"
C
I
/
C
D
 
G
u
i
d
e
"
,


 
 
 
 
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
 
"
U
n
d
e
r
s
t
a
n
d
 
f
a
i
l
i
n
g
 
c
h
e
c
k
s
,
 
C
I
 
l
o
g
s
,
 
a
n
d
 
c
o
n
t
r
i
b
u
t
i
o
n
 
p
i
p
e
l
i
n
e
s
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
c
i
c
d
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
s
u
m
M
i
n
u
t
e
s
(
c
i
c
d
S
t
e
p
s
)
,


 
 
 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
l
o
c
a
l
S
t
o
r
a
g
e
S
e
t
"
,
 
s
t
o
r
a
g
e
K
e
y
:
 
G
U
I
D
E
_
S
T
O
R
A
G
E
_
K
E
Y
S
.
c
i
c
d
,
 
t
o
t
a
l
S
t
e
p
s
:
 
c
i
c
d
S
t
e
p
s
.
l
e
n
g
t
h
 
}
,


 
 
}
,


 
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"
,


 
 
 
 
t
i
t
l
e
:
 
"
G
S
o
C
 
P
r
o
p
o
s
a
l
 
G
u
i
d
e
"
,


 
 
 
 
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
 
"
P
l
a
n
,
 
w
r
i
t
e
,
 
a
n
d
 
r
e
v
i
e
w
 
a
 
s
t
r
o
n
g
 
G
S
o
C
 
p
r
o
p
o
s
a
l
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
s
u
m
M
i
n
u
t
e
s
(
g
s
o
c
P
r
o
p
o
s
a
l
S
t
e
p
s
)
,


 
 
 
 
k
i
n
d
:
 
"
g
u
i
d
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
l
o
c
a
l
S
t
o
r
a
g
e
S
e
t
"
,
 
s
t
o
r
a
g
e
K
e
y
:
 
G
U
I
D
E
_
S
T
O
R
A
G
E
_
K
E
Y
S
.
g
s
o
c
P
r
o
p
o
s
a
l
,
 
t
o
t
a
l
S
t
e
p
s
:
 
g
s
o
c
P
r
o
p
o
s
a
l
S
t
e
p
s
.
l
e
n
g
t
h
 
}
,


 
 
}
,


 
 
"
g
s
o
c
-
o
r
g
s
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
g
s
o
c
-
o
r
g
s
"
,


 
 
 
 
t
i
t
l
e
:
 
"
G
S
o
C
 
O
r
g
s
"
,


 
 
 
 
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
 
"
S
h
o
r
t
l
i
s
t
 
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
s
 
a
n
d
 
p
r
o
j
e
c
t
 
i
d
e
a
s
 
f
o
r
 
y
o
u
r
 
p
r
o
p
o
s
a
l
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
3
0
,


 
 
 
 
k
i
n
d
:
 
"
m
i
l
e
s
t
o
n
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
m
i
l
e
s
t
o
n
e
"
,
 
m
i
l
e
s
t
o
n
e
:
 
"
g
s
o
c
-
o
r
g
s
"
 
}
,


 
 
}
,


 
 
"
g
i
t
h
u
b
-
o
a
u
t
h
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
g
i
t
h
u
b
-
o
a
u
t
h
"
,


 
 
 
 
t
i
t
l
e
:
 
"
G
i
t
H
u
b
 
O
A
u
t
h
 
C
o
n
n
e
c
t
"
,


 
 
 
 
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
 
"
C
o
n
n
e
c
t
 
y
o
u
r
 
G
i
t
H
u
b
 
p
r
o
f
i
l
e
 
s
o
 
c
o
n
t
r
i
b
u
t
i
o
n
 
s
i
g
n
a
l
s
 
c
a
n
 
p
o
w
e
r
 
y
o
u
r
 
p
r
o
f
i
l
e
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
p
r
o
f
i
l
e
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
1
0
,


 
 
 
 
k
i
n
d
:
 
"
m
i
l
e
s
t
o
n
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
m
i
l
e
s
t
o
n
e
"
,
 
m
i
l
e
s
t
o
n
e
:
 
"
g
i
t
h
u
b
-
o
a
u
t
h
"
 
}
,


 
 
}
,


 
 
l
e
a
d
e
r
b
o
a
r
d
:
 
{


 
 
 
 
s
l
u
g
:
 
"
l
e
a
d
e
r
b
o
a
r
d
"
,


 
 
 
 
t
i
t
l
e
:
 
"
L
e
a
d
e
r
b
o
a
r
d
"
,


 
 
 
 
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
 
"
R
e
v
i
e
w
 
c
o
n
t
r
i
b
u
t
i
o
n
 
a
n
a
l
y
t
i
c
s
 
a
n
d
 
b
e
n
c
h
m
a
r
k
 
y
o
u
r
 
o
p
e
n
-
s
o
u
r
c
e
 
a
c
t
i
v
i
t
y
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
a
n
a
l
y
t
i
c
s
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
1
5
,


 
 
 
 
k
i
n
d
:
 
"
m
i
l
e
s
t
o
n
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
m
i
l
e
s
t
o
n
e
"
,
 
m
i
l
e
s
t
o
n
e
:
 
"
l
e
a
d
e
r
b
o
a
r
d
"
 
}
,


 
 
}
,


 
 
"
m
e
n
t
o
r
-
p
r
o
g
r
a
m
"
:
 
{


 
 
 
 
s
l
u
g
:
 
"
m
e
n
t
o
r
-
p
r
o
g
r
a
m
"
,


 
 
 
 
t
i
t
l
e
:
 
"
M
e
n
t
o
r
 
P
r
o
g
r
a
m
"
,


 
 
 
 
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
 
"
T
r
a
c
k
 
o
p
e
n
-
s
o
u
r
c
e
 
p
r
o
g
r
a
m
s
 
a
n
d
 
m
e
n
t
o
r
-
l
e
d
 
o
p
p
o
r
t
u
n
i
t
i
e
s
.
"
,


 
 
 
 
h
r
e
f
:
 
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
p
r
o
g
r
a
m
s
"
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
2
5
,


 
 
 
 
k
i
n
d
:
 
"
m
i
l
e
s
t
o
n
e
"
,


 
 
 
 
c
o
m
p
l
e
t
i
o
n
:
 
{
 
t
y
p
e
:
 
"
m
i
l
e
s
t
o
n
e
"
,
 
m
i
l
e
s
t
o
n
e
:
 
"
m
e
n
t
o
r
-
p
r
o
g
r
a
m
"
 
}
,


 
 
}
,


}
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
P
a
t
h
(
i
d
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
d
,
 
t
i
t
l
e
:
 
s
t
r
i
n
g
,
 
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
,
 
s
l
u
g
s
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
[
]
)
:
 
L
e
a
r
n
i
n
g
P
a
t
h
 
{


 
 
c
o
n
s
t
 
i
t
e
m
s
 
=
 
s
l
u
g
s
.
m
a
p
(
(
s
l
u
g
)
 
=
>
 
I
T
E
M
S
[
s
l
u
g
]
)
;


 
 
r
e
t
u
r
n
 
{


 
 
 
 
i
d
,


 
 
 
 
t
i
t
l
e
,


 
 
 
 
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
,


 
 
 
 
s
l
u
g
s
,


 
 
 
 
i
t
e
m
s
,


 
 
 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
:
 
i
t
e
m
s
.
r
e
d
u
c
e
(
(
s
u
m
,
 
i
t
e
m
)
 
=
>
 
s
u
m
 
+
 
i
t
e
m
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
,
 
0
)
,


 
 
}
;


}




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
 
L
E
A
R
N
I
N
G
_
P
A
T
H
S
:
 
L
e
a
r
n
i
n
g
P
a
t
h
[
]
 
=
 
[


 
 
b
u
i
l
d
P
a
t
h
(


 
 
 
 
"
f
i
r
s
t
-
c
o
n
t
r
i
b
u
t
o
r
"
,


 
 
 
 
"
F
i
r
s
t
 
C
o
n
t
r
i
b
u
t
o
r
 
(
B
e
g
i
n
n
e
r
)
"
,


 
 
 
 
"
A
 
s
e
q
u
e
n
t
i
a
l
 
s
t
a
r
t
e
r
 
t
r
a
c
k
 
f
r
o
m
 
c
o
n
t
r
i
b
u
t
i
o
n
 
b
a
s
i
c
s
 
t
o
 
c
h
o
o
s
i
n
g
 
y
o
u
r
 
f
i
r
s
t
 
r
e
p
o
s
i
t
o
r
y
.
"
,


 
 
 
 
[
"
f
i
r
s
t
-
p
r
"
,
 
"
g
i
t
-
g
u
i
d
e
"
,
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,
 
"
r
e
p
o
-
d
i
s
c
o
v
e
r
y
"
]
,


 
 
)
,


 
 
b
u
i
l
d
P
a
t
h
(


 
 
 
 
"
g
s
o
c
-
r
e
a
d
y
"
,


 
 
 
 
"
G
S
o
C
 
R
e
a
d
y
 
(
I
n
t
e
r
m
e
d
i
a
t
e
)
"
,


 
 
 
 
"
A
 
p
r
e
p
a
r
a
t
i
o
n
 
p
a
t
h
 
f
o
r
 
r
e
a
d
i
n
g
 
p
r
o
j
e
c
t
s
,
 
u
n
d
e
r
s
t
a
n
d
i
n
g
 
p
i
p
e
l
i
n
e
s
,
 
a
n
d
 
d
r
a
f
t
i
n
g
 
p
r
o
p
o
s
a
l
s
.
"
,


 
 
 
 
[
"
f
i
r
s
t
-
p
r
"
,
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
"
,
 
"
c
i
c
d
"
,
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"
,
 
"
g
s
o
c
-
o
r
g
s
"
]
,


 
 
)
,


 
 
b
u
i
l
d
P
a
t
h
(


 
 
 
 
"
o
s
s
-
r
e
g
u
l
a
r
"
,


 
 
 
 
"
O
S
S
 
R
e
g
u
l
a
r
 
(
A
d
v
a
n
c
e
d
)
"
,


 
 
 
 
"
A
 
f
u
l
l
 
o
p
e
n
-
s
o
u
r
c
e
 
r
o
u
t
i
n
e
 
c
o
v
e
r
i
n
g
 
e
v
e
r
y
 
g
u
i
d
e
,
 
p
r
o
f
i
l
e
 
c
o
n
n
e
c
t
i
o
n
,
 
a
n
a
l
y
t
i
c
s
,
 
a
n
d
 
p
r
o
g
r
a
m
s
.
"
,


 
 
 
 
[
"
f
i
r
s
t
-
p
r
"
,
 
"
g
i
t
-
g
u
i
d
e
"
,
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,
 
"
r
e
a
d
-
c
o
d
e
b
a
s
e
"
,
 
"
c
i
c
d
"
,
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"
,
 
"
g
i
t
h
u
b
-
o
a
u
t
h
"
,
 
"
l
e
a
d
e
r
b
o
a
r
d
"
,
 
"
m
e
n
t
o
r
-
p
r
o
g
r
a
m
"
]
,


 
 
)
,


]
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
g
e
t
L
e
a
r
n
i
n
g
P
a
t
h
B
y
I
d
(
i
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
)
:
 
L
e
a
r
n
i
n
g
P
a
t
h
 
{


 
 
r
e
t
u
r
n
 
L
E
A
R
N
I
N
G
_
P
A
T
H
S
.
f
i
n
d
(
(
p
a
t
h
)
 
=
>
 
p
a
t
h
.
i
d
 
=
=
=
 
i
d
)
 
?
?
 
L
E
A
R
N
I
N
G
_
P
A
T
H
S
[
0
]
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
 
{


 
 
w
i
n
d
o
w
.
d
i
s
p
a
t
c
h
E
v
e
n
t
(
n
e
w
 
E
v
e
n
t
(
L
E
A
R
N
I
N
G
_
P
A
T
H
_
P
R
O
G
R
E
S
S
_
E
V
E
N
T
)
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
r
e
a
d
S
t
o
r
e
d
S
e
t
(
s
t
o
r
a
g
e
K
e
y
:
 
s
t
r
i
n
g
)
:
 
S
e
t
<
s
t
r
i
n
g
>
 
{


 
 
t
r
y
 
{


 
 
 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
J
S
O
N
.
p
a
r
s
e
(
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
s
t
o
r
a
g
e
K
e
y
)
 
?
?
 
"
[
]
"
)
;


 
 
 
 
r
e
t
u
r
n
 
A
r
r
a
y
.
i
s
A
r
r
a
y
(
p
a
r
s
e
d
)
 
?
 
n
e
w
 
S
e
t
(
p
a
r
s
e
d
.
f
i
l
t
e
r
(
(
i
t
e
m
)
:
 
i
t
e
m
 
i
s
 
s
t
r
i
n
g
 
=
>
 
t
y
p
e
o
f
 
i
t
e
m
 
=
=
=
 
"
s
t
r
i
n
g
"
)
)
 
:
 
n
e
w
 
S
e
t
(
)
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
n
e
w
 
S
e
t
(
)
;


 
 
}


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
r
e
a
d
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
s
(
)
:
 
S
e
t
<
s
t
r
i
n
g
>
 
{


 
 
r
e
t
u
r
n
 
r
e
a
d
S
t
o
r
e
d
S
e
t
(
L
E
A
R
N
I
N
G
_
P
A
T
H
_
M
I
L
E
S
T
O
N
E
S
_
K
E
Y
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
m
a
r
k
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
(
s
l
u
g
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
)
 
{


 
 
c
o
n
s
t
 
m
i
l
e
s
t
o
n
e
s
 
=
 
r
e
a
d
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
s
(
)
;


 
 
i
f
 
(
m
i
l
e
s
t
o
n
e
s
.
h
a
s
(
s
l
u
g
)
)
 
r
e
t
u
r
n
;


 
 
m
i
l
e
s
t
o
n
e
s
.
a
d
d
(
s
l
u
g
)
;


 
 
t
r
y
 
{


 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
L
E
A
R
N
I
N
G
_
P
A
T
H
_
M
I
L
E
S
T
O
N
E
S
_
K
E
Y
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
[
.
.
.
m
i
l
e
s
t
o
n
e
s
]
)
)
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
;


 
 
}


 
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
i
n
f
e
r
L
e
a
r
n
i
n
g
P
a
t
h
I
d
(
p
a
t
h
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
)
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
d
 
|
 
n
u
l
l
 
{


 
 
i
f
 
(
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
g
s
o
c
"
)
 
|
|
 
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
r
e
a
d
-
c
o
d
e
b
a
s
e
"
)
 
|
|
 
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
c
i
c
d
"
)
)
 
r
e
t
u
r
n
 
"
g
s
o
c
-
r
e
a
d
y
"
;


 
 
i
f
 
(
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
a
n
a
l
y
t
i
c
s
"
)
 
|
|
 
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
p
r
o
g
r
a
m
s
"
)
 
|
|
 
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
p
r
o
f
i
l
e
"
)
)
 
r
e
t
u
r
n
 
"
o
s
s
-
r
e
g
u
l
a
r
"
;


 
 
i
f
 
(
p
a
t
h
n
a
m
e
.
i
n
c
l
u
d
e
s
(
"
/
o
p
e
n
s
o
u
r
c
e
"
)
)
 
r
e
t
u
r
n
 
"
f
i
r
s
t
-
c
o
n
t
r
i
b
u
t
o
r
"
;


 
 
r
e
t
u
r
n
 
n
u
l
l
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
i
s
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
C
o
m
p
l
e
t
e
(


 
 
i
t
e
m
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
,


 
 
f
i
r
s
t
P
r
C
o
m
p
l
e
t
e
d
S
t
e
p
I
d
s
:
 
S
e
t
<
s
t
r
i
n
g
>
,


 
 
m
i
l
e
s
t
o
n
e
s
:
 
S
e
t
<
s
t
r
i
n
g
>
,


)
 
{


 
 
i
f
 
(
i
t
e
m
.
c
o
m
p
l
e
t
i
o
n
.
t
y
p
e
 
=
=
=
 
"
f
i
r
s
t
-
p
r
"
)
 
r
e
t
u
r
n
 
f
i
r
s
t
P
r
C
o
m
p
l
e
t
e
d
S
t
e
p
I
d
s
.
s
i
z
e
 
>
=
 
i
t
e
m
.
c
o
m
p
l
e
t
i
o
n
.
t
o
t
a
l
S
t
e
p
s
;


 
 
i
f
 
(
i
t
e
m
.
c
o
m
p
l
e
t
i
o
n
.
t
y
p
e
 
=
=
=
 
"
m
i
l
e
s
t
o
n
e
"
)
 
r
e
t
u
r
n
 
m
i
l
e
s
t
o
n
e
s
.
h
a
s
(
i
t
e
m
.
c
o
m
p
l
e
t
i
o
n
.
m
i
l
e
s
t
o
n
e
)
;


 
 
r
e
t
u
r
n
 
r
e
a
d
S
t
o
r
e
d
S
e
t
(
i
t
e
m
.
c
o
m
p
l
e
t
i
o
n
.
s
t
o
r
a
g
e
K
e
y
)
.
s
i
z
e
 
>
=
 
i
t
e
m
.
c
o
m
p
l
e
t
i
o
n
.
t
o
t
a
l
S
t
e
p
s
;


}


