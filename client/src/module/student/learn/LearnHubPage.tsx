
i
m
p
o
r
t
 
{
 
u
s
e
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
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
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
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
 
m
o
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
f
r
a
m
e
r
-
m
o
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
 
S
e
a
r
c
h
,
 
A
r
r
o
w
U
p
R
i
g
h
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
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
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
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
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
,
 
S
I
T
E
_
U
R
L
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
{
 
i
t
e
m
L
i
s
t
S
c
h
e
m
a
,
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
t
r
u
c
t
u
r
e
d
-
d
a
t
a
"
;


i
m
p
o
r
t
 
{


 
 
T
R
A
C
K
S
,


 
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
,


 
 
C
A
T
E
G
O
R
Y
_
O
R
D
E
R
,


 
 
t
y
p
e
 
T
r
a
c
k
C
a
t
e
g
o
r
y
,


}
 
f
r
o
m
 
"
.
/
t
r
a
c
k
s
"
;


i
m
p
o
r
t
 
{
 
T
r
a
c
k
C
a
r
d
 
}
 
f
r
o
m
 
"
.
/
T
r
a
c
k
C
a
r
d
"
;


i
m
p
o
r
t
 
{


 
 
R
e
c
o
m
m
e
n
d
a
t
i
o
n
C
a
r
d
,


 
 
t
y
p
e
 
W
e
a
k
A
r
e
a
,


}
 
f
r
o
m
 
"
.
/
c
o
m
p
o
n
e
n
t
s
/
R
e
c
o
m
m
e
n
d
a
t
i
o
n
C
a
r
d
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
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
 
u
s
e
T
r
a
c
k
P
r
o
g
r
e
s
s
 
}
 
f
r
o
m
 
"
.
/
u
s
e
T
r
a
c
k
P
r
o
g
r
e
s
s
"
;


i
m
p
o
r
t
 
{
 
K
i
c
k
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
K
i
c
k
e
r
"
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
D
E
S
C
R
I
P
T
I
O
N
:
 
R
e
c
o
r
d
<
T
r
a
c
k
C
a
t
e
g
o
r
y
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
p
r
a
c
t
i
c
e
:
 
"
C
u
r
a
t
e
d
 
q
u
e
s
t
i
o
n
s
,
 
a
n
i
m
a
t
e
d
 
l
e
s
s
o
n
s
,
 
a
n
d
 
r
o
a
d
m
a
p
s
 
t
o
 
a
c
e
 
p
l
a
c
e
m
e
n
t
s
.
"
,


 
 
f
r
o
n
t
e
n
d
:
 
"
H
T
M
L
,
 
C
S
S
,
 
J
a
v
a
S
c
r
i
p
t
,
 
T
y
p
e
S
c
r
i
p
t
,
 
a
n
d
 
R
e
a
c
t
 
—
 
f
r
o
m
 
b
a
s
i
c
s
 
t
o
 
i
n
t
e
r
v
i
e
w
-
r
e
a
d
y
.
"
,


 
 
b
a
c
k
e
n
d
:
 
"
N
o
d
e
,
 
P
y
t
h
o
n
,
 
D
j
a
n
g
o
,
 
F
a
s
t
A
P
I
,
 
a
n
d
 
F
l
a
s
k
 
f
o
r
 
f
u
l
l
-
s
t
a
c
k
 
m
a
s
t
e
r
y
.
"
,


 
 
d
a
t
a
:
 
"
S
Q
L
,
 
N
u
m
P
y
,
 
P
a
n
d
a
s
,
 
a
n
d
 
M
L
 
b
a
s
i
c
s
 
f
o
r
 
d
a
t
a
-
h
e
a
v
y
 
r
o
l
e
s
.
"
,


 
 
w
e
b
3
:
 
"
S
m
a
r
t
 
c
o
n
t
r
a
c
t
s
,
 
D
e
F
i
,
 
a
n
d
 
b
l
o
c
k
c
h
a
i
n
 
f
r
o
m
 
f
i
r
s
t
 
p
r
i
n
c
i
p
l
e
s
.
"
,


}
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
e
a
r
n
H
u
b
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
C
a
t
e
g
o
r
y
,
 
s
e
t
A
c
t
i
v
e
C
a
t
e
g
o
r
y
]
 
=
 
u
s
e
S
t
a
t
e
<
T
r
a
c
k
C
a
t
e
g
o
r
y
 
|
 
"
A
l
l
"
>
(
"
A
l
l
"
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
,
 
s
e
t
A
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
]
 
=
 
u
s
e
S
t
a
t
e
(
"
A
l
l
"
)
;


 
 
c
o
n
s
t
 
[
s
o
r
t
B
y
,
 
s
e
t
S
o
r
t
B
y
]
 
=
 
u
s
e
S
t
a
t
e
(
"
p
o
p
u
l
a
r
"
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
r
e
c
D
a
t
a
,
 
i
s
L
o
a
d
i
n
g
:
 
l
o
a
d
i
n
g
R
e
c
s
 
}
 
=
 
u
s
e
Q
u
e
r
y
<
{
 
w
e
a
k
A
r
e
a
s
:
 
W
e
a
k
A
r
e
a
[
]
 
}
>
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
l
e
a
r
n
-
r
e
c
o
m
m
e
n
d
a
t
i
o
n
s
"
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
{
 
w
e
a
k
A
r
e
a
s
:
 
W
e
a
k
A
r
e
a
[
]
 
}
>
(
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
r
e
c
o
m
m
e
n
d
a
t
i
o
n
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
3
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
}
)
;


 
 
c
o
n
s
t
 
w
e
a
k
A
r
e
a
s
 
=
 
r
e
c
D
a
t
a
?
.
w
e
a
k
A
r
e
a
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
{
 
p
r
o
g
r
e
s
s
M
a
p
 
}
 
=
 
u
s
e
T
r
a
c
k
P
r
o
g
r
e
s
s
(
)
;




c
o
n
s
t
 
g
r
o
u
p
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
l
e
t
 
f
i
l
t
e
r
e
d
 
=
 
T
R
A
C
K
S
;




 
 
 
 
c
o
n
s
t
 
n
e
e
d
l
e
 
=
 
s
e
a
r
c
h
.
t
r
i
m
(
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
i
f
 
(
n
e
e
d
l
e
)
 
{


 
 
 
 
 
 
f
i
l
t
e
r
e
d
 
=
 
f
i
l
t
e
r
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
t
)
 
=
>


 
 
 
 
 
 
 
 
 
 
t
.
t
i
t
l
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
n
e
e
d
l
e
)
 
|
|


 
 
 
 
 
 
 
 
 
 
t
.
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
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
n
e
e
d
l
e
)
 
|
|


 
 
 
 
 
 
 
 
 
 
t
.
t
a
g
s
?
.
s
o
m
e
(
(
t
a
g
)
 
=
>
 
t
a
g
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
n
e
e
d
l
e
)
)


 
 
 
 
 
 
)
;


 
 
 
 
}




 
 
 
 
i
f
 
(
a
c
t
i
v
e
C
a
t
e
g
o
r
y
 
!
=
=
 
"
A
l
l
"
)
 
{


 
 
 
 
 
 
f
i
l
t
e
r
e
d
 
=
 
f
i
l
t
e
r
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
t
)
 
=
>
 
t
.
c
a
t
e
g
o
r
y
 
=
=
=
 
a
c
t
i
v
e
C
a
t
e
g
o
r
y
)
;


 
 
 
 
}




 
 
 
 
i
f
 
(
a
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
 
!
=
=
 
"
A
l
l
"
)
 
{


 
 
 
 
 
 
f
i
l
t
e
r
e
d
 
=
 
f
i
l
t
e
r
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
t
)
 
=
>
 
t
.
d
i
f
f
i
c
u
l
t
y
?
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
a
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)


 
 
 
 
 
 
)
;


 
 
 
 
}




 
 
 
 
f
i
l
t
e
r
e
d
 
=
 
[
.
.
.
f
i
l
t
e
r
e
d
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
a
l
p
h
a
b
e
t
i
c
a
l
"
)
 
{


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
a
.
t
i
t
l
e
.
l
o
c
a
l
e
C
o
m
p
a
r
e
(
b
.
t
i
t
l
e
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
r
e
c
e
n
t
"
)
 
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
 
D
a
t
e
(
b
.
c
r
e
a
t
e
d
A
t
 
|
|
 
0
)
.
g
e
t
T
i
m
e
(
)
 
-
 
n
e
w
 
D
a
t
e
(
a
.
c
r
e
a
t
e
d
A
t
 
|
|
 
0
)
.
g
e
t
T
i
m
e
(
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
s
a
l
a
r
y
"
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
V
a
l
 
=
 
a
.
s
a
l
a
r
y
 
?
 
p
a
r
s
e
I
n
t
(
a
.
s
a
l
a
r
y
.
r
e
p
l
a
c
e
(
/
\
D
/
g
,
 
"
"
)
)
 
|
|
 
0
 
:
 
0
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
V
a
l
 
=
 
b
.
s
a
l
a
r
y
 
?
 
p
a
r
s
e
I
n
t
(
b
.
s
a
l
a
r
y
.
r
e
p
l
a
c
e
(
/
\
D
/
g
,
 
"
"
)
)
 
|
|
 
0
 
:
 
0
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
b
V
a
l
 
-
 
a
V
a
l
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(
b
.
e
n
r
o
l
l
e
d
S
t
u
d
e
n
t
s
 
|
|
 
0
)
 
-
 
(
a
.
e
n
r
o
l
l
e
d
S
t
u
d
e
n
t
s
 
|
|
 
0
)
;


 
 
 
 
 
 
}


 
 
 
 
}
)
;




 
 
 
 
c
o
n
s
t
 
b
y
C
a
t
e
g
o
r
y
 
=
 
n
e
w
 
M
a
p
<
T
r
a
c
k
C
a
t
e
g
o
r
y
,
 
t
y
p
e
o
f
 
T
R
A
C
K
S
>
(
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
t
 
o
f
 
f
i
l
t
e
r
e
d
)
 
{


 
 
 
 
 
 
i
f
 
(
!
b
y
C
a
t
e
g
o
r
y
.
h
a
s
(
t
.
c
a
t
e
g
o
r
y
)
)
 
b
y
C
a
t
e
g
o
r
y
.
s
e
t
(
t
.
c
a
t
e
g
o
r
y
,
 
[
]
)
;


 
 
 
 
 
 
b
y
C
a
t
e
g
o
r
y
.
g
e
t
(
t
.
c
a
t
e
g
o
r
y
)
!
.
p
u
s
h
(
t
)
;


 
 
 
 
}


 
 
 
 


 
 
 
 
r
e
t
u
r
n
 
C
A
T
E
G
O
R
Y
_
O
R
D
E
R
.
m
a
p
(
(
c
a
t
)
 
=
>
 
(
{


 
 
 
 
 
 
c
a
t
e
g
o
r
y
:
 
c
a
t
,


 
 
 
 
 
 
t
r
a
c
k
s
:
 
b
y
C
a
t
e
g
o
r
y
.
g
e
t
(
c
a
t
)
 
?
?
 
[
]
,


 
 
 
 
}
)
)
.
f
i
l
t
e
r
(
(
g
)
 
=
>
 
g
.
t
r
a
c
k
s
.
l
e
n
g
t
h
 
>
 
0
)
;


 
 
}
,
 
[
s
e
a
r
c
h
,
 
a
c
t
i
v
e
C
a
t
e
g
o
r
y
,
 
a
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
,
 
s
o
r
t
B
y
]
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
T
r
a
c
k
s
 
=
 
T
R
A
C
K
S
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
t
o
t
a
l
S
h
o
w
n
 
=
 
g
r
o
u
p
e
d
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
 
g
)
 
=
>
 
s
u
m
 
+
 
g
.
t
r
a
c
k
s
.
l
e
n
g
t
h
,
 
0
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
b
-
1
6
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
L
e
a
r
n
i
n
g
 
H
u
b
 
-
 
F
r
e
e
 
P
r
o
g
r
a
m
m
i
n
g
 
T
u
t
o
r
i
a
l
s
"


 
 
 
 
 
 
 
 
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
=
"
C
u
r
a
t
e
d
 
q
u
e
s
t
i
o
n
s
 
a
n
d
 
s
t
u
d
y
 
m
a
t
e
r
i
a
l
 
b
y
 
G
o
o
g
l
e
,
 
A
m
a
z
o
n
,
 
a
n
d
 
M
e
t
a
 
e
n
g
i
n
e
e
r
s
.
 
L
e
a
r
n
 
J
a
v
a
S
c
r
i
p
t
,
 
P
y
t
h
o
n
,
 
R
e
a
c
t
,
 
D
S
A
,
 
S
Q
L
,
 
a
n
d
 
m
o
r
e
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
l
e
a
r
n
 
p
r
o
g
r
a
m
m
i
n
g
,
 
f
r
e
e
 
c
o
d
i
n
g
 
t
u
t
o
r
i
a
l
s
,
 
J
a
v
a
S
c
r
i
p
t
 
t
u
t
o
r
i
a
l
,
 
P
y
t
h
o
n
 
t
u
t
o
r
i
a
l
,
 
R
e
a
c
t
 
t
u
t
o
r
i
a
l
,
 
w
e
b
 
d
e
v
e
l
o
p
m
e
n
t
,
 
D
S
A
 
p
r
a
c
t
i
c
e
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
l
e
a
r
n
"
)
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
[


 
 
 
 
 
 
 
 
 
 
i
t
e
m
L
i
s
t
S
c
h
e
m
a
(


 
 
 
 
 
 
 
 
 
 
 
 
T
R
A
C
K
S
.
m
a
p
(
(
t
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
t
.
t
i
t
l
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
/
$
{
t
.
p
a
t
h
}
`
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
 
t
.
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


 
 
 
 
 
 
 
 
 
 
 
 
}
)
)
,


 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
(
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
H
o
m
e
"
,
 
u
r
l
:
 
S
I
T
E
_
U
R
L
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
L
e
a
r
n
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
`
 
}
,


 
 
 
 
 
 
 
 
 
 
]
)
,


 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
6
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
m
b
-
1
0
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
l
e
a
r
n
 
/
 
h
u
b
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
4
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
t
u
d
y
 
t
h
a
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
s
h
i
p
s
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
s
c
a
l
e
X
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
s
c
a
l
e
X
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
7
,
 
d
e
l
a
y
:
 
0
.
4
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
b
g
-
l
i
m
e
-
4
0
0
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
a
x
-
w
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
L
e
s
s
o
n
s
,
 
q
u
e
s
t
i
o
n
 
b
a
n
k
s
,
 
a
n
d
 
p
r
a
c
t
i
c
e
 
t
r
a
c
k
s
 
a
s
s
e
m
b
l
e
d
 
b
y
 
e
n
g
i
n
e
e
r
s
 
f
r
o
m
 
G
o
o
g
l
e
,
 
A
m
a
z
o
n
,


 
 
 
 
 
 
 
 
 
 
 
 
a
n
d
 
M
e
t
a
 
—
 
p
a
c
e
d
 
f
o
r
 
p
l
a
c
e
m
e
n
t
 
s
e
a
s
o
n
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
i
t
e
m
s
-
e
n
d
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
T
r
a
c
k
s
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
i
e
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
O
R
D
E
R
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
R
e
c
o
m
m
e
n
d
e
d
 
f
o
r
 
y
o
u
 
*
/
}


 
 
 
 
 
 
{
!
l
o
a
d
i
n
g
R
e
c
s
 
&
&
 
w
e
a
k
A
r
e
a
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
0
5
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
1
4
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
f
l
e
x
-
w
r
a
p
 
m
b
-
6
 
p
b
-
4
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
r
e
c
o
m
m
e
n
d
e
d
 
f
o
r
 
y
o
u
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
w
e
a
k
A
r
e
a
s
.
l
e
n
g
t
h
}
 
a
r
e
a
{
w
e
a
k
A
r
e
a
s
.
l
e
n
g
t
h
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
 
t
o
 
s
t
r
e
n
g
t
h
e
n


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
l
g
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
w
e
a
k
A
r
e
a
s
.
s
l
i
c
e
(
0
,
 
6
)
.
m
a
p
(
(
a
r
e
a
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
c
o
m
m
e
n
d
a
t
i
o
n
C
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
a
r
e
a
.
t
y
p
e
}
-
$
{
a
r
e
a
.
t
o
p
i
c
}
-
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
e
a
=
{
a
r
e
a
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
s
e
c
t
i
o
n
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
B
u
i
l
d
 
C
h
a
l
l
e
n
g
e
s
 
c
a
l
l
o
u
t
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
 
s
p
a
c
e
-
y
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
l
e
a
r
n
/
c
h
a
l
l
e
n
g
e
s
"


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
x
-
5
 
p
y
-
4
 
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
l
i
m
e
-
1
0
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
l
i
m
e
-
8
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
5
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
u
i
l
d
 
C
h
a
l
l
e
n
g
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
5
 
h
a
n
d
s
-
o
n
 
p
r
o
j
e
c
t
s
 
t
o
 
t
e
s
t
 
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
 
—
 
f
r
o
m
 
p
o
r
t
f
o
l
i
o
 
s
i
t
e
s
 
t
o
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
l
e
a
r
n
/
m
e
n
t
o
r
s
"


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
x
-
5
 
p
y
-
4
 
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
a
m
b
e
r
-
1
0
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
a
m
b
e
r
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
a
m
b
e
r
-
8
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
"
>
6
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
e
n
t
o
r
 
M
a
t
c
h
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
n
e
c
t
 
w
i
t
h
 
e
n
g
i
n
e
e
r
s
 
f
r
o
m
 
G
o
o
g
l
e
,
 
M
i
c
r
o
s
o
f
t
,
 
A
m
a
z
o
n
,
 
N
e
t
f
l
i
x
 
&
 
m
o
r
e
 
f
o
r
 
1
:
1
 
g
u
i
d
a
n
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
&
 
F
i
l
t
e
r
s
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
1
2
 
s
p
a
c
e
-
y
-
4
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
t
r
a
c
k
s
,
 
s
k
i
l
l
s
,
 
o
r
 
k
e
y
w
o
r
d
s
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
a
r
c
h
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
S
e
a
r
c
h
 
l
e
a
r
n
i
n
g
 
t
r
a
c
k
s
"


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
l
-
1
1
 
p
r
-
4
 
p
y
-
3
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
 
C
o
n
t
r
o
l
s
 
B
a
r
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
s
m
:
f
l
e
x
-
r
o
w
 
s
m
:
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
a
t
e
g
o
r
y
 
T
a
b
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
p
-
1
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
C
a
t
e
g
o
r
y
(
"
A
l
l
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
r
o
u
n
d
e
d
-
m
d
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
$
{
a
c
t
i
v
e
C
a
t
e
g
o
r
y
 
=
=
=
 
"
A
l
l
"
 
?
 
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
7
0
0
 
s
h
a
d
o
w
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
 
:
 
"
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
t
r
a
n
s
p
a
r
e
n
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
O
R
D
E
R
.
m
a
p
(
(
c
a
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
a
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
C
a
t
e
g
o
r
y
(
c
a
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
r
o
u
n
d
e
d
-
m
d
 
c
a
p
i
t
a
l
i
z
e
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
$
{
a
c
t
i
v
e
C
a
t
e
g
o
r
y
 
=
=
=
 
c
a
t
 
?
 
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
7
0
0
 
s
h
a
d
o
w
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
 
:
 
"
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
t
r
a
n
s
p
a
r
e
n
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
[
c
a
t
]
 
|
|
 
c
a
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
D
i
f
f
i
c
u
l
t
y
 
C
h
i
p
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
A
l
l
"
,
 
"
B
e
g
i
n
n
e
r
"
,
 
"
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
"
,
 
"
A
d
v
a
n
c
e
d
"
]
.
m
a
p
(
(
l
e
v
e
l
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
l
e
v
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
(
l
e
v
e
l
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
$
{
a
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
 
=
=
=
 
l
e
v
e
l
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
1
0
0
 
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
"
 
:
 
"
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
7
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
e
v
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
o
r
t
 
D
r
o
p
d
o
w
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
S
o
r
t
 
B
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
r
t
B
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
o
r
t
B
y
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
x
-
3
 
p
y
-
1
.
5
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
p
o
p
u
l
a
r
"
>
M
o
s
t
 
P
o
p
u
l
a
r
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
s
a
l
a
r
y
"
>
S
a
l
a
r
y
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
a
l
p
h
a
b
e
t
i
c
a
l
"
>
A
l
p
h
a
b
e
t
i
c
a
l
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
r
e
c
e
n
t
"
>
R
e
c
e
n
t
l
y
 
A
d
d
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
(
s
e
a
r
c
h
 
|
|
 
a
c
t
i
v
e
C
a
t
e
g
o
r
y
 
!
=
=
 
"
A
l
l
"
 
|
|
 
a
c
t
i
v
e
D
i
f
f
i
c
u
l
t
y
 
!
=
=
 
"
A
l
l
"
)
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
S
h
o
w
n
}
 
m
a
t
c
h
{
t
o
t
a
l
S
h
o
w
n
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
e
s
"
}


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
/
*
 
G
r
o
u
p
e
d
 
t
r
a
c
k
s
 
*
/
}


 
 
 
 
 
 
{
g
r
o
u
p
e
d
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
y
-
2
0
 
t
e
x
t
-
c
e
n
t
e
r
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
t
r
a
c
k
s
 
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
e
a
r
c
h
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
t
r
y
 
a
 
d
i
f
f
e
r
e
n
t
 
k
e
y
w
o
r
d


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
1
6
"
>


 
 
 
 
 
 
 
 
 
 
{
g
r
o
u
p
e
d
.
m
a
p
(
(
g
r
o
u
p
,
 
g
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
 
k
e
y
=
{
g
r
o
u
p
.
c
a
t
e
g
o
r
y
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
a
t
e
g
o
r
y
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
f
l
e
x
-
w
r
a
p
 
m
b
-
6
 
$
{
g
i
 
>
 
0
 
?
 
"
p
t
-
4
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
 
:
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
g
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
 
/
 
{
S
t
r
i
n
g
(
g
r
o
u
p
.
c
a
t
e
g
o
r
y
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
[
g
r
o
u
p
.
c
a
t
e
g
o
r
y
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
a
x
-
w
-
l
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
D
E
S
C
R
I
P
T
I
O
N
[
g
r
o
u
p
.
c
a
t
e
g
o
r
y
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
o
u
p
.
t
r
a
c
k
s
.
l
e
n
g
t
h
}
 
t
r
a
c
k
{
g
r
o
u
p
.
t
r
a
c
k
s
.
l
e
n
g
t
h
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
 
l
g
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
o
u
p
.
t
r
a
c
k
s
.
m
a
p
(
(
t
r
a
c
k
,
 
i
d
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
c
k
C
a
r
d
 
k
e
y
=
{
t
r
a
c
k
.
i
d
}
 
t
r
a
c
k
=
{
t
r
a
c
k
}
 
i
n
d
e
x
=
{
i
d
x
}
 
p
r
o
g
r
e
s
s
=
{
p
r
o
g
r
e
s
s
M
a
p
[
t
r
a
c
k
.
i
d
]
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


