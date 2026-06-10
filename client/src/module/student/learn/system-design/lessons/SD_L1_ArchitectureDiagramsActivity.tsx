
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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
h
a
p
e
s
,
 
F
i
l
e
C
o
d
e
2
,
 
C
h
e
c
k
,
 
E
y
e
,
 
E
y
e
O
f
f
,


 
 
M
o
n
i
t
o
r
,
 
S
e
r
v
e
r
,
 
D
a
t
a
b
a
s
e
,
 
B
o
x
,
 
Z
a
p
,
 
C
l
o
u
d
,
 
A
r
r
o
w
R
i
g
h
t
,


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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
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
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
D
,


 
 
M
O
N
O
,


 
 
s
e
c
t
i
o
n
T
i
t
l
e
,


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
,


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


 
 
c
a
r
d
H
o
v
e
r
,


}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




c
o
n
s
t
 
G
O
O
D
 
=
 
"
#
1
0
b
9
8
1
"
;


c
o
n
s
t
 
B
A
D
 
=
 
"
#
f
9
7
3
1
6
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
B
o
x
 
v
o
c
a
b
u
l
a
r
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
B
o
x
S
h
a
p
e
 
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


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
i
c
o
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
c
o
l
o
r
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
:
 
s
t
r
i
n
g
;


 
 
e
x
a
m
p
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


}




c
o
n
s
t
 
S
H
A
P
E
S
:
 
B
o
x
S
h
a
p
e
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
c
l
i
e
n
t
"
,


 
 
 
 
l
a
b
e
l
:
 
"
C
l
i
e
n
t
"
,


 
 
 
 
i
c
o
n
:
 
<
M
o
n
i
t
o
r
 
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
"
#
6
3
6
6
f
1
"
,


 
 
 
 
d
e
s
c
:
 
"
A
n
y
t
h
i
n
g
 
a
 
u
s
e
r
 
h
o
l
d
s
 
-
 
b
r
o
w
s
e
r
,
 
m
o
b
i
l
e
 
a
p
p
,
 
I
o
T
 
d
e
v
i
c
e
.
 
A
l
w
a
y
s
 
t
h
e
 
l
e
f
t
m
o
s
t
 
b
o
x
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
i
O
S
 
a
p
p
,
 
R
e
a
c
t
 
w
e
b
 
a
p
p
,
 
s
m
a
r
t
 
T
V
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
b
"
,


 
 
 
 
l
a
b
e
l
:
 
"
L
o
a
d
 
B
a
l
a
n
c
e
r
"
,


 
 
 
 
i
c
o
n
:
 
<
S
h
a
p
e
s
 
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
"
#
f
5
9
e
0
b
"
,


 
 
 
 
d
e
s
c
:
 
"
S
p
r
e
a
d
s
 
t
r
a
f
f
i
c
 
a
c
r
o
s
s
 
m
a
n
y
 
s
e
r
v
e
r
s
.
 
M
a
k
e
s
 
1
0
0
 
s
e
r
v
e
r
s
 
l
o
o
k
 
l
i
k
e
 
1
.
 
D
r
a
w
n
 
a
s
 
a
 
d
i
a
m
o
n
d
 
o
r
 
r
o
u
n
d
e
d
 
p
i
l
l
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
A
W
S
 
A
L
B
,
 
N
g
i
n
x
,
 
H
A
P
r
o
x
y
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
r
v
i
c
e
"
,


 
 
 
 
l
a
b
e
l
:
 
"
S
e
r
v
i
c
e
 
/
 
A
p
p
 
S
e
r
v
e
r
"
,


 
 
 
 
i
c
o
n
:
 
<
S
e
r
v
e
r
 
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
d
e
s
c
:
 
"
W
h
e
r
e
 
y
o
u
r
 
b
u
s
i
n
e
s
s
 
l
o
g
i
c
 
r
u
n
s
.
 
U
s
u
a
l
l
y
 
d
r
a
w
n
 
a
s
 
a
 
r
e
c
t
a
n
g
l
e
.
 
H
o
r
i
z
o
n
t
a
l
l
y
 
s
c
a
l
a
b
l
e
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
T
w
e
e
t
 
s
e
r
v
i
c
e
,
 
A
u
t
h
 
s
e
r
v
i
c
e
,
 
O
r
d
e
r
 
s
e
r
v
i
c
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
a
c
h
e
"
,


 
 
 
 
l
a
b
e
l
:
 
"
C
a
c
h
e
"
,


 
 
 
 
i
c
o
n
:
 
<
Z
a
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
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
"
#
e
c
4
8
9
9
"
,


 
 
 
 
d
e
s
c
:
 
"
F
a
s
t
 
i
n
-
m
e
m
o
r
y
 
s
t
o
r
e
 
s
i
t
t
i
n
g
 
i
n
 
f
r
o
n
t
 
o
f
 
a
 
s
l
o
w
 
D
B
.
 
R
e
d
u
c
e
s
 
l
o
a
d
 
o
n
 
t
h
e
 
d
a
t
a
b
a
s
e
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
R
e
d
i
s
,
 
M
e
m
c
a
c
h
e
d
,
 
i
n
-
p
r
o
c
e
s
s
 
L
R
U
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
b
"
,


 
 
 
 
l
a
b
e
l
:
 
"
D
a
t
a
b
a
s
e
"
,


 
 
 
 
i
c
o
n
:
 
<
D
a
t
a
b
a
s
e
 
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
"
#
1
0
b
9
8
1
"
,


 
 
 
 
d
e
s
c
:
 
"
D
u
r
a
b
l
e
 
s
t
o
r
a
g
e
.
 
C
y
l
i
n
d
e
r
 
s
h
a
p
e
 
i
s
 
u
n
i
v
e
r
s
a
l
 
-
 
n
e
v
e
r
 
d
r
a
w
 
i
t
 
a
s
 
a
 
p
l
a
i
n
 
b
o
x
.
 
U
s
u
a
l
l
y
 
t
h
e
 
r
i
g
h
t
m
o
s
t
 
b
o
x
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
P
o
s
t
g
r
e
S
Q
L
,
 
C
a
s
s
a
n
d
r
a
,
 
M
o
n
g
o
D
B
,
 
D
y
n
a
m
o
D
B
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
q
u
e
u
e
"
,


 
 
 
 
l
a
b
e
l
:
 
"
Q
u
e
u
e
 
/
 
S
t
r
e
a
m
"
,


 
 
 
 
i
c
o
n
:
 
<
B
o
x
 
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
"
#
8
b
5
c
f
6
"
,


 
 
 
 
d
e
s
c
:
 
"
B
u
f
f
e
r
 
b
e
t
w
e
e
n
 
p
r
o
d
u
c
e
r
 
a
n
d
 
c
o
n
s
u
m
e
r
.
 
D
e
c
o
u
p
l
e
s
 
s
e
r
v
i
c
e
s
.
 
D
r
a
w
n
 
a
s
 
s
t
a
c
k
e
d
 
b
a
r
s
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
K
a
f
k
a
,
 
R
a
b
b
i
t
M
Q
,
 
S
Q
S
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
d
n
"
,


 
 
 
 
l
a
b
e
l
:
 
"
C
D
N
"
,


 
 
 
 
i
c
o
n
:
 
<
C
l
o
u
d
 
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
c
o
l
o
r
:
 
"
#
0
6
b
6
d
4
"
,


 
 
 
 
d
e
s
c
:
 
"
C
a
c
h
e
s
 
s
t
a
t
i
c
 
c
o
n
t
e
n
t
 
(
i
m
a
g
e
s
,
 
J
S
,
 
v
i
d
e
o
)
 
c
l
o
s
e
 
t
o
 
u
s
e
r
s
 
g
e
o
g
r
a
p
h
i
c
a
l
l
y
.
 
R
e
d
u
c
e
s
 
l
a
t
e
n
c
y
 
a
n
d
 
e
g
r
e
s
s
 
c
o
s
t
.
"
,


 
 
 
 
e
x
a
m
p
l
e
:
 
"
C
l
o
u
d
f
l
a
r
e
,
 
C
l
o
u
d
F
r
o
n
t
,
 
F
a
s
t
l
y
"
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
B
o
x
V
o
c
a
b
u
l
a
r
y
(
)
 
{


 
 
c
o
n
s
t
 
[
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
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
>
(
"
s
e
r
v
i
c
e
"
)
;


 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
S
H
A
P
E
S
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
p
i
c
k
e
d
)
 
?
?
 
S
H
A
P
E
S
[
2
]
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
7
 
b
o
x
e
s
 
t
h
a
t
 
c
o
v
e
r
 
9
0
%
 
o
f
 
H
L
D
 
d
i
a
g
r
a
m
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
E
v
e
r
y
 
H
L
D
 
d
i
a
g
r
a
m
 
y
o
u
 
d
r
a
w
 
i
s
 
a
 
r
e
a
r
r
a
n
g
e
m
e
n
t
 
o
f
 
t
h
e
 
s
a
m
e
 
7
 
s
h
a
p
e
s
.
 
M
e
m
o
r
i
z
e
 
w
h
a
t
 
e
a
c
h
 
o
n
e


 
 
 
 
 
 
 
 
m
e
a
n
s
 
-
 
y
o
u
r
 
i
n
t
e
r
v
i
e
w
e
r
 
c
e
r
t
a
i
n
l
y
 
h
a
s
.
 
C
l
i
c
k
 
a
n
y
 
s
h
a
p
e
 
t
o
 
s
e
e
 
w
h
e
n
 
t
o
 
u
s
e
 
i
t
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
s
h
a
p
e
 
p
a
l
e
t
t
e
 
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


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
7
,
 
1
f
r
)
"
,
 
g
a
p
:
 
8
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
H
A
P
E
S
.
m
a
p
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
n
 
=
 
p
i
c
k
e
d
 
=
=
=
 
s
.
i
d
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
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
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
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
P
i
c
k
e
d
(
s
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
o
n
 
?
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
s
.
c
o
l
o
r
}
`
 
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
o
n
 
?
 
`
$
{
s
.
c
o
l
o
r
}
1
5
`
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
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
:
 
"
b
o
r
d
e
r
-
c
o
l
o
r
 
1
8
0
m
s
,
 
b
a
c
k
g
r
o
u
n
d
 
1
8
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
3
6
,
 
h
e
i
g
h
t
:
 
3
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
o
n
 
?
 
s
.
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
o
n
 
?
 
"
#
f
f
f
"
 
:
 
s
.
c
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
o
n
 
?
 
"
n
o
n
e
"
 
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
s
.
c
o
l
o
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
c
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
l
a
b
e
l
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
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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
 
d
e
t
a
i
l
 
c
a
r
d
 
*
/
}


 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
k
e
y
=
{
a
c
t
i
v
e
.
i
d
}


 
 
 
 
 
 
 
 
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
2
,
 
s
c
a
l
e
:
 
0
.
9
8
 
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
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
e
x
i
t
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
 
-
8
,
 
s
c
a
l
e
:
 
0
.
9
8
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
8
0
,
 
d
a
m
p
i
n
g
:
 
2
6
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
.
c
o
l
o
r
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
a
c
t
i
v
e
.
c
o
l
o
r
}
0
f
`
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
2
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
4
0
,
 
h
e
i
g
h
t
:
 
4
0
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
a
c
t
i
v
e
.
c
o
l
o
r
,
 
c
o
l
o
r
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
.
i
c
o
n
}


 
 
 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
.
l
a
b
e
l
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


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
.
d
e
s
c
}


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
.
c
o
l
o
r
}
4
0
`
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
a
c
t
i
v
e
.
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
e
x
a
m
p
l
e
s
:
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
.
e
x
a
m
p
l
e
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
d
i
v
>


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
A
r
r
o
w
 
s
e
m
a
n
t
i
c
s
 
+
 
a
 
r
e
f
e
r
e
n
c
e
 
d
i
a
g
r
a
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
A
r
r
o
w
s
A
n
d
D
i
a
g
r
a
m
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
h
o
w
L
a
b
e
l
s
,
 
s
e
t
S
h
o
w
L
a
b
e
l
s
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
t
r
u
e
)
;




 
 
/
/
 
a
 
c
a
n
o
n
i
c
a
l
 
"
w
e
b
 
a
p
p
"
 
r
e
f
e
r
e
n
c
e
 
d
i
a
g
r
a
m


 
 
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
A
r
r
o
w
s
 
m
e
a
n
 
t
h
i
n
g
s
.
 
L
a
b
e
l
 
t
h
e
m
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
n
 
u
n
l
a
b
e
l
e
d
 
a
r
r
o
w
 
i
s
 
a
m
b
i
g
u
o
u
s
.
 
I
s
 
i
t
 
H
T
T
P
?
 
I
s
 
i
t
 
a
s
y
n
c
?
 
I
s
 
i
t
 
o
n
e
-
w
a
y
?
 
P
r
o
s
 
l
a
b
e
l
 
e
v
e
r
y


 
 
 
 
 
 
 
 
a
r
r
o
w
 
w
i
t
h
 
a
 
v
e
r
b
 
o
r
 
a
 
p
r
o
t
o
c
o
l
.
 
T
o
g
g
l
e
 
l
a
b
e
l
s
 
b
e
l
o
w
 
-
 
n
o
t
i
c
e
 
h
o
w
 
m
u
c
h
 
t
h
e
 
d
i
a
g
r
a
m
 
l
o
s
e
s


 
 
 
 
 
 
 
 
w
h
e
n
 
y
o
u
 
r
e
m
o
v
e
 
t
h
e
m
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
l
e
g
e
n
d
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
3
,
 
1
f
r
)
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
6
 
}
}
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
o
l
i
d
 
a
r
r
o
w
"
,
 
d
e
s
c
:
 
"
S
y
n
c
h
r
o
n
o
u
s
 
r
e
q
u
e
s
t
/
r
e
s
p
o
n
s
e
 
(
H
T
T
P
,
 
g
R
P
C
)
"
,
 
s
a
m
p
l
e
:
 
"
→
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
a
s
h
e
d
 
a
r
r
o
w
"
,
 
d
e
s
c
:
 
"
A
s
y
n
c
 
m
e
s
s
a
g
e
 
(
q
u
e
u
e
,
 
p
u
b
/
s
u
b
,
 
w
e
b
h
o
o
k
)
"
,
 
s
a
m
p
l
e
:
 
"
⇢
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
o
u
b
l
e
-
e
n
d
e
d
"
,
 
d
e
s
c
:
 
"
B
i
d
i
r
e
c
t
i
o
n
a
l
 
(
W
e
b
S
o
c
k
e
t
,
 
r
e
p
l
i
c
a
t
i
o
n
)
"
,
 
s
a
m
p
l
e
:
 
"
↔
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
l
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
l
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
r
e
m
"
,
 
c
o
l
o
r
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
l
.
s
a
m
p
l
e
}
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
l
.
l
a
b
e
l
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
.
d
e
s
c
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
 
t
o
g
g
l
e
 
*
/
}


 
 
 
 
 
 
<
b
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
S
h
o
w
L
a
b
e
l
s
(
(
v
)
 
=
>
 
!
v
)
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
s
h
o
w
L
a
b
e
l
s
 
?
 
S
D
 
:
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
s
h
o
w
L
a
b
e
l
s
 
?
 
"
#
f
f
f
"
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
s
h
o
w
L
a
b
e
l
s
 
?
 
<
E
y
e
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>
 
:
 
<
E
y
e
O
f
f
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
{
s
h
o
w
L
a
b
e
l
s
 
?
 
"
L
a
b
e
l
s
 
O
N
"
 
:
 
"
L
a
b
e
l
s
 
O
F
F
"
}


 
 
 
 
 
 
<
/
b
u
t
t
o
n
>




 
 
 
 
 
 
{
/
*
 
r
e
f
e
r
e
n
c
e
 
d
i
a
g
r
a
m
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,
 
p
a
d
d
i
n
g
:
 
2
0
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
8
0
0
 
3
2
0
"
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
m
a
x
H
e
i
g
h
t
:
 
3
6
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
d
e
f
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
7
"
 
r
e
f
Y
=
"
4
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
8
,
4
 
L
0
,
8
 
z
"
 
f
i
l
l
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
m
u
t
e
d
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
7
"
 
r
e
f
Y
=
"
4
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
8
,
4
 
L
0
,
8
 
z
"
 
f
i
l
l
=
"
#
8
b
5
c
f
6
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
l
i
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
2
0
"
 
y
=
"
1
3
0
"
 
w
i
d
t
h
=
"
1
0
0
"
 
h
e
i
g
h
t
=
"
6
0
"
 
r
x
=
"
8
"
 
f
i
l
l
=
"
#
6
3
6
6
f
1
1
5
"
 
s
t
r
o
k
e
=
"
#
6
3
6
6
f
1
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
7
0
"
 
y
=
"
1
6
5
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
"
#
6
3
6
6
f
1
"
>
C
l
i
e
n
t
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
D
N
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
1
7
0
"
 
y
=
"
3
0
"
 
w
i
d
t
h
=
"
9
0
"
 
h
e
i
g
h
t
=
"
5
0
"
 
r
x
=
"
8
"
 
f
i
l
l
=
"
#
0
6
b
6
d
4
1
5
"
 
s
t
r
o
k
e
=
"
#
0
6
b
6
d
4
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
2
1
5
"
 
y
=
"
6
0
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
"
#
0
6
b
6
d
4
"
>
C
D
N
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
B
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
g
o
n
 
p
o
i
n
t
s
=
"
2
1
5
,
1
4
0
 
2
7
5
,
1
6
0
 
2
1
5
,
1
8
0
 
1
5
5
,
1
6
0
"
 
f
i
l
l
=
"
#
f
5
9
e
0
b
1
5
"
 
s
t
r
o
k
e
=
"
#
f
5
9
e
0
b
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
2
1
5
"
 
y
=
"
1
6
5
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
"
#
f
5
9
e
0
b
"
>
L
B
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
p
p
 
S
e
r
v
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
3
2
5
"
 
y
=
"
1
3
0
"
 
w
i
d
t
h
=
"
1
1
0
"
 
h
e
i
g
h
t
=
"
6
0
"
 
r
x
=
"
8
"
 
f
i
l
l
=
{
`
$
{
S
D
}
1
5
`
}
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
8
0
"
 
y
=
"
1
5
8
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
{
S
D
}
>
A
p
p
 
S
e
r
v
e
r
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
8
0
"
 
y
=
"
1
7
5
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
>
×
 
N
 
r
e
p
l
i
c
a
s
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
a
c
h
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
4
9
0
"
 
y
=
"
6
0
"
 
w
i
d
t
h
=
"
9
0
"
 
h
e
i
g
h
t
=
"
5
0
"
 
r
x
=
"
8
"
 
f
i
l
l
=
"
#
e
c
4
8
9
9
1
5
"
 
s
t
r
o
k
e
=
"
#
e
c
4
8
9
9
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
5
3
5
"
 
y
=
"
9
0
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
"
#
e
c
4
8
9
9
"
>
C
a
c
h
e
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
D
B
 
c
y
l
i
n
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
e
l
l
i
p
s
e
 
c
x
=
"
5
3
5
"
 
c
y
=
"
1
7
0
"
 
r
x
=
"
5
5
"
 
r
y
=
"
1
2
"
 
f
i
l
l
=
"
#
1
0
b
9
8
1
1
5
"
 
s
t
r
o
k
e
=
"
#
1
0
b
9
8
1
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
4
8
0
 
1
7
0
 
L
4
8
0
 
2
1
5
 
A
5
5
 
1
2
 
0
 
0
 
0
 
5
9
0
 
2
1
5
 
L
5
9
0
 
1
7
0
"
 
f
i
l
l
=
"
#
1
0
b
9
8
1
1
5
"
 
s
t
r
o
k
e
=
"
#
1
0
b
9
8
1
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
e
l
l
i
p
s
e
 
c
x
=
"
5
3
5
"
 
c
y
=
"
1
7
0
"
 
r
x
=
"
5
5
"
 
r
y
=
"
1
2
"
 
f
i
l
l
=
"
n
o
n
e
"
 
s
t
r
o
k
e
=
"
#
1
0
b
9
8
1
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
5
3
5
"
 
y
=
"
2
0
0
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
"
#
1
0
b
9
8
1
"
>
D
B
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
Q
u
e
u
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
g
>


 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
3
2
5
"
 
y
=
"
2
4
0
"
 
w
i
d
t
h
=
"
1
1
0
"
 
h
e
i
g
h
t
=
"
5
0
"
 
r
x
=
"
6
"
 
f
i
l
l
=
"
#
8
b
5
c
f
6
1
5
"
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
4
5
"
 
y
1
=
"
2
4
8
"
 
x
2
=
"
3
4
5
"
 
y
2
=
"
2
8
2
"
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
6
5
"
 
y
1
=
"
2
4
8
"
 
x
2
=
"
3
6
5
"
 
y
2
=
"
2
8
2
"
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
8
5
"
 
y
1
=
"
2
4
8
"
 
x
2
=
"
3
8
5
"
 
y
2
=
"
2
8
2
"
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
8
0
"
 
y
=
"
2
7
0
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
"
#
8
b
5
c
f
6
"
>
Q
u
e
u
e
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
W
o
r
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
"
4
9
0
"
 
y
=
"
2
4
0
"
 
w
i
d
t
h
=
"
1
1
0
"
 
h
e
i
g
h
t
=
"
5
0
"
 
r
x
=
"
8
"
 
f
i
l
l
=
{
`
$
{
S
D
}
1
5
`
}
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
5
4
5
"
 
y
=
"
2
7
0
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
F
a
m
i
l
y
=
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
i
l
l
=
{
S
D
}
>
W
o
r
k
e
r
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
r
r
o
w
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
/
*
 
c
l
i
e
n
t
 
→
 
C
D
N
 
(
s
t
a
t
i
c
)
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
9
0
 
1
4
5
 
Q
 
1
4
0
 
8
0
 
1
7
5
 
6
0
"
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
f
i
l
l
=
"
n
o
n
e
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
c
l
i
e
n
t
 
→
 
L
B
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
1
2
0
"
 
y
1
=
"
1
6
0
"
 
x
2
=
"
1
5
5
"
 
y
2
=
"
1
6
0
"
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
B
 
→
 
a
p
p
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
2
7
5
"
 
y
1
=
"
1
6
0
"
 
x
2
=
"
3
2
5
"
 
y
2
=
"
1
6
0
"
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
p
p
 
→
 
c
a
c
h
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
4
3
5
"
 
y
1
=
"
1
4
5
"
 
x
2
=
"
4
9
0
"
 
y
2
=
"
9
5
"
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
p
p
 
→
 
D
B
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
4
3
5
"
 
y
1
=
"
1
7
0
"
 
x
2
=
"
4
8
0
"
 
y
2
=
"
1
7
0
"
 
s
t
r
o
k
e
=
{
S
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
c
a
c
h
e
 
→
 
D
B
 
(
m
i
s
s
)
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
5
3
5
"
 
y
1
=
"
1
1
0
"
 
x
2
=
"
5
3
5
"
 
y
2
=
"
1
5
8
"
 
s
t
r
o
k
e
=
"
#
1
0
b
9
8
1
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
,
3
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
-
m
u
t
e
d
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
p
p
 
→
 
q
u
e
u
e
 
(
a
s
y
n
c
)
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
3
8
0
"
 
y
1
=
"
1
9
0
"
 
x
2
=
"
3
8
0
"
 
y
2
=
"
2
4
0
"
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
5
,
3
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
-
m
u
t
e
d
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
q
u
e
u
e
 
→
 
w
o
r
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
"
4
3
5
"
 
y
1
=
"
2
6
5
"
 
x
2
=
"
4
9
0
"
 
y
2
=
"
2
6
5
"
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
5
,
3
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
-
m
u
t
e
d
)
"
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
A
B
E
L
S
 
-
 
t
o
g
g
l
e
a
b
l
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
L
a
b
e
l
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
f
o
n
t
F
a
m
i
l
y
=
{
M
O
N
O
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
1
3
5
"
 
y
=
"
9
5
"
 
f
i
l
l
=
"
#
0
6
b
6
d
4
"
>
G
E
T
 
/
i
m
g
.
j
p
g
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
1
2
8
"
 
y
=
"
1
5
2
"
 
f
i
l
l
=
{
S
D
}
>
H
T
T
P
S
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
2
8
3
"
 
y
=
"
1
5
2
"
 
f
i
l
l
=
{
S
D
}
>
H
T
T
P
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
4
5
2
"
 
y
=
"
1
1
5
"
 
f
i
l
l
=
"
#
e
c
4
8
9
9
"
>
G
E
T
 
k
e
y
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
4
5
0
"
 
y
=
"
1
6
2
"
 
f
i
l
l
=
{
S
D
}
>
S
Q
L
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
5
4
5
"
 
y
=
"
1
3
5
"
 
f
i
l
l
=
"
#
1
0
b
9
8
1
"
>
o
n
 
m
i
s
s
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
3
8
8
"
 
y
=
"
2
2
0
"
 
f
i
l
l
=
"
#
8
b
5
c
f
6
"
>
p
u
b
l
i
s
h
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
"
4
4
5
"
 
y
=
"
2
5
8
"
 
f
i
l
l
=
"
#
8
b
5
c
f
6
"
>
c
o
n
s
u
m
e
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
G
O
O
D
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
G
O
O
D
}
1
0
`
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
G
O
O
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
D
 
T
H
E
 
D
I
A
G
R
A
M
 
A
B
O
V
E


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
o
p
 
p
a
t
h
:
 
c
l
i
e
n
t
 
h
i
t
s
 
C
D
N
 
f
o
r
 
s
t
a
t
i
c
.
 
M
i
d
d
l
e
:
 
c
l
i
e
n
t
 
→
 
L
B
 
→
 
A
p
p
 
→
 
C
a
c
h
e
 
(
t
h
e
n
 
D
B
 
o
n
 
m
i
s
s
)
.


 
 
 
 
 
 
 
 
 
 
B
o
t
t
o
m
:
 
A
p
p
 
p
u
b
l
i
s
h
e
s
 
a
s
y
n
c
 
w
o
r
k
 
t
o
 
Q
u
e
u
e
,
 
W
o
r
k
e
r
 
c
o
n
s
u
m
e
s
 
i
t
.
 
T
h
a
t
&
r
s
q
u
o
;
s
 
y
o
u
r
 
d
e
f
a
u
l
t
 
w
e
b


 
 
 
 
 
 
 
 
 
 
a
r
c
h
i
t
e
c
t
u
r
e
.
 
M
e
m
o
r
i
z
e
 
t
h
e
 
s
h
a
p
e
.


 
 
 
 
 
 
 
 
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
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
D
i
a
g
r
a
m
 
s
m
e
l
l
s
 
(
s
p
o
t
 
t
h
e
 
m
i
s
t
a
k
e
s
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
S
m
e
l
l
 
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


 
 
b
a
d
g
e
:
 
s
t
r
i
n
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
:
 
s
t
r
i
n
g
;


 
 
f
i
x
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
S
M
E
L
L
S
:
 
S
m
e
l
l
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
d
b
-
b
o
x
"
,


 
 
 
 
b
a
d
g
e
:
 
"
s
h
a
p
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
D
a
t
a
b
a
s
e
 
d
r
a
w
n
 
a
s
 
a
 
p
l
a
i
n
 
r
e
c
t
a
n
g
l
e
"
,


 
 
 
 
d
e
s
c
:
 
"
R
e
a
d
e
r
 
c
a
n
&
r
s
q
u
o
;
t
 
t
e
l
l
 
i
f
 
i
t
&
r
s
q
u
o
;
s
 
a
 
s
e
r
v
i
c
e
 
o
r
 
s
t
o
r
a
g
e
.
 
A
m
b
i
g
u
o
u
s
.
"
,


 
 
 
 
f
i
x
:
 
"
A
l
w
a
y
s
 
u
s
e
 
a
 
c
y
l
i
n
d
e
r
.
 
I
t
&
r
s
q
u
o
;
s
 
t
h
e
 
u
n
i
v
e
r
s
a
l
 
s
y
m
b
o
l
 
f
o
r
 
d
u
r
a
b
l
e
 
s
t
o
r
a
g
e
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
n
o
-
l
b
"
,


 
 
 
 
b
a
d
g
e
:
 
"
s
c
a
l
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
M
u
l
t
i
p
l
e
 
s
e
r
v
e
r
s
 
b
u
t
 
n
o
 
l
o
a
d
 
b
a
l
a
n
c
e
r
"
,


 
 
 
 
d
e
s
c
:
 
"
H
o
w
 
i
s
 
t
r
a
f
f
i
c
 
b
e
i
n
g
 
d
i
s
t
r
i
b
u
t
e
d
?
 
D
N
S
 
r
o
u
n
d
-
r
o
b
i
n
?
 
M
a
g
i
c
?
"
,


 
 
 
 
f
i
x
:
 
"
A
n
y
 
t
i
m
e
 
y
o
u
 
d
r
a
w
 
>
1
 
a
p
p
 
s
e
r
v
e
r
,
 
p
u
t
 
a
n
 
L
B
 
i
n
 
f
r
o
n
t
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
n
o
-
l
a
b
e
l
s
"
,


 
 
 
 
b
a
d
g
e
:
 
"
a
r
r
o
w
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
U
n
l
a
b
e
l
e
d
 
a
r
r
o
w
s
 
e
v
e
r
y
w
h
e
r
e
"
,


 
 
 
 
d
e
s
c
:
 
"
I
s
 
i
t
 
s
y
n
c
 
o
r
 
a
s
y
n
c
?
 
H
T
T
P
 
o
r
 
K
a
f
k
a
?
 
R
e
a
d
e
r
 
h
a
s
 
t
o
 
g
u
e
s
s
 
t
h
e
 
p
r
o
t
o
c
o
l
.
"
,


 
 
 
 
f
i
x
:
 
"
L
a
b
e
l
 
e
a
c
h
 
a
r
r
o
w
 
w
i
t
h
 
a
 
v
e
r
b
 
o
r
 
p
r
o
t
o
c
o
l
:
 
`
P
O
S
T
 
/
o
r
d
e
r
`
,
 
`
p
u
b
l
i
s
h
`
,
 
`
r
e
p
l
i
c
a
t
e
`
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
t
a
l
e
-
c
a
c
h
e
"
,


 
 
 
 
b
a
d
g
e
:
 
"
f
l
o
w
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
a
c
h
e
 
d
r
a
w
n
 
n
e
x
t
 
t
o
 
D
B
 
w
i
t
h
 
n
o
 
d
i
r
e
c
t
i
o
n
"
,


 
 
 
 
d
e
s
c
:
 
"
I
s
 
t
h
e
 
a
p
p
 
w
r
i
t
i
n
g
 
t
h
r
o
u
g
h
?
 
R
e
a
d
i
n
g
 
a
r
o
u
n
d
?
 
Y
o
u
 
j
u
s
t
 
p
u
n
t
e
d
 
o
n
 
c
o
n
s
i
s
t
e
n
c
y
.
"
,


 
 
 
 
f
i
x
:
 
"
D
r
a
w
 
e
x
p
l
i
c
i
t
 
a
r
r
o
w
s
:
 
a
p
p
→
c
a
c
h
e
 
(
r
e
a
d
)
,
 
c
a
c
h
e
→
D
B
 
(
o
n
 
m
i
s
s
)
,
 
a
p
p
→
D
B
→
c
a
c
h
e
 
(
w
r
i
t
e
)
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
n
o
-
c
l
i
e
n
t
"
,


 
 
 
 
b
a
d
g
e
:
 
"
s
c
o
p
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
D
i
a
g
r
a
m
 
s
t
a
r
t
s
 
a
t
 
t
h
e
 
a
p
p
 
s
e
r
v
e
r
"
,


 
 
 
 
d
e
s
c
:
 
"
W
h
e
r
e
 
a
r
e
 
t
h
e
 
u
s
e
r
s
?
 
M
o
b
i
l
e
?
 
W
e
b
?
 
Y
o
u
 
s
k
i
p
p
e
d
 
t
h
e
 
e
n
t
i
r
e
 
n
e
t
w
o
r
k
 
l
a
y
e
r
.
"
,


 
 
 
 
f
i
x
:
 
"
A
l
w
a
y
s
 
s
t
a
r
t
 
a
t
 
t
h
e
 
C
l
i
e
n
t
 
o
n
 
t
h
e
 
f
a
r
 
l
e
f
t
.
 
S
h
o
w
 
a
t
 
l
e
a
s
t
 
o
n
e
 
f
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
 
p
a
t
h
.
"
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
S
p
o
t
T
h
e
S
m
e
l
l
(
)
 
{


 
 
c
o
n
s
t
 
[
r
e
v
e
a
l
e
d
,
 
s
e
t
R
e
v
e
a
l
e
d
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
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
b
o
o
l
e
a
n
>
>
(
{
}
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
5
 
d
i
a
g
r
a
m
 
s
m
e
l
l
s
 
t
h
a
t
 
s
c
r
e
a
m
 
j
u
n
i
o
r
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
W
h
e
n
 
a
n
 
i
n
t
e
r
v
i
e
w
e
r
 
s
e
e
s
 
a
n
y
 
o
f
 
t
h
e
s
e
,
 
t
h
e
y
 
s
i
l
e
n
t
l
y
 
m
a
r
k
 
y
o
u
 
d
o
w
n
.
 
T
a
p
 
e
a
c
h
 
c
a
r
d
 
t
o
 
r
e
v
e
a
l


 
 
 
 
 
 
 
 
t
h
e
 
f
i
x
.
 
T
h
e
s
e
 
a
r
e
 
t
h
e
 
e
x
a
c
t
 
t
h
i
n
g
s
 
a
 
s
e
n
i
o
r
 
w
o
u
l
d
 
p
o
i
n
t
 
o
u
t
 
i
n
 
a
 
r
e
v
i
e
w
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
M
E
L
L
S
.
m
a
p
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
p
e
n
 
=
 
r
e
v
e
a
l
e
d
[
s
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
o
p
e
n
 
?
 
G
O
O
D
 
:
 
B
A
D
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
o
p
e
n
 
?
 
`
$
{
G
O
O
D
}
0
8
`
 
:
 
`
$
{
B
A
D
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
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
:
 
"
b
o
r
d
e
r
-
c
o
l
o
r
 
2
0
0
m
s
,
 
b
a
c
k
g
r
o
u
n
d
 
2
0
0
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
5
r
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
2
p
x
 
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
9
9
9
,
 
b
a
c
k
g
r
o
u
n
d
:
 
B
A
D
,
 
c
o
l
o
r
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
5
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
b
a
d
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
t
i
t
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
d
e
s
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
e
n
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
"
f
i
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
-
4
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
2
0
,
 
d
a
m
p
i
n
g
:
 
2
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
G
O
O
D
}
1
5
`
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
G
O
O
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,
 
g
a
p
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
 
s
h
r
i
n
k
-
0
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
G
O
O
D
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
G
O
O
D
 
}
}
>
F
i
x
:
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
f
i
x
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
"
r
e
v
e
a
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
}
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
R
e
v
e
a
l
e
d
(
(
r
)
 
=
>
 
(
{
 
.
.
.
r
,
 
[
s
.
i
d
]
:
 
t
r
u
e
 
}
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
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
"
,
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
6
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l
 
t
h
e
 
f
i
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
M
A
I
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
1
_
A
r
c
h
i
t
e
c
t
u
r
e
D
i
a
g
r
a
m
s
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
s
h
a
p
e
s
"
,
 
l
a
b
e
l
:
 
"
T
h
e
 
7
 
S
h
a
p
e
s
"
,
 
i
c
o
n
:
 
<
S
h
a
p
e
s
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
B
o
x
V
o
c
a
b
u
l
a
r
y
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
a
r
r
o
w
s
"
,
 
l
a
b
e
l
:
 
"
A
r
r
o
w
s
 
&
 
F
l
o
w
"
,
 
i
c
o
n
:
 
<
A
r
r
o
w
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
A
r
r
o
w
s
A
n
d
D
i
a
g
r
a
m
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
s
m
e
l
l
s
"
,
 
l
a
b
e
l
:
 
"
D
i
a
g
r
a
m
 
S
m
e
l
l
s
"
,
 
i
c
o
n
:
 
<
F
i
l
e
C
o
d
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
S
p
o
t
T
h
e
S
m
e
l
l
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
s
h
a
p
e
 
i
s
 
u
n
i
v
e
r
s
a
l
l
y
 
u
s
e
d
 
f
o
r
 
a
 
d
a
t
a
b
a
s
e
 
i
n
 
H
L
D
 
d
i
a
g
r
a
m
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
R
e
c
t
a
n
g
l
e
"
,
 
"
C
y
l
i
n
d
e
r
"
,
 
"
D
i
a
m
o
n
d
"
,
 
"
C
l
o
u
d
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
y
l
i
n
d
e
r
 
=
 
d
u
r
a
b
l
e
 
s
t
o
r
a
g
e
.
 
U
s
e
 
i
t
 
e
v
e
r
y
 
t
i
m
e
.
 
R
e
c
t
a
n
g
l
e
s
 
a
r
e
 
f
o
r
 
s
e
r
v
i
c
e
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
Y
o
u
 
d
r
a
w
 
t
h
r
e
e
 
A
p
p
 
S
e
r
v
e
r
 
b
o
x
e
s
.
 
W
h
a
t
 
m
u
s
t
 
c
o
m
e
 
i
n
 
f
r
o
n
t
 
o
f
 
t
h
e
m
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
A
 
c
a
c
h
e
"
,
 
"
A
 
l
o
a
d
 
b
a
l
a
n
c
e
r
"
,
 
"
A
 
q
u
e
u
e
"
,
 
"
A
 
C
D
N
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
M
u
l
t
i
p
l
e
 
i
d
e
n
t
i
c
a
l
 
s
e
r
v
e
r
s
 
a
l
w
a
y
s
 
s
i
t
 
b
e
h
i
n
d
 
a
n
 
L
B
.
 
O
t
h
e
r
w
i
s
e
 
t
r
a
f
f
i
c
 
d
i
s
t
r
i
b
u
t
i
o
n
 
i
s
 
u
n
d
e
f
i
n
e
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
a
n
 
H
L
D
 
d
i
a
g
r
a
m
,
 
a
 
d
a
s
h
e
d
 
a
r
r
o
w
 
b
e
t
w
e
e
n
 
t
w
o
 
s
e
r
v
i
c
e
s
 
u
s
u
a
l
l
y
 
m
e
a
n
s
 
w
h
a
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
O
p
t
i
o
n
a
l
 
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
"
,


 
 
 
 
 
 
 
 
"
D
e
p
r
e
c
a
t
e
d
 
p
a
t
h
"
,


 
 
 
 
 
 
 
 
"
A
s
y
n
c
h
r
o
n
o
u
s
 
/
 
q
u
e
u
e
d
 
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
S
a
m
e
 
a
s
 
s
o
l
i
d
 
-
 
j
u
s
t
 
a
 
s
t
y
l
e
 
c
h
o
i
c
e
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
a
s
h
e
d
 
=
 
a
s
y
n
c
 
(
q
u
e
u
e
,
 
p
u
b
/
s
u
b
,
 
w
e
b
h
o
o
k
)
.
 
S
o
l
i
d
 
=
 
s
y
n
c
h
r
o
n
o
u
s
 
H
T
T
P
/
g
R
P
C
.
 
T
h
i
s
 
i
s
 
a
 
w
i
d
e
l
y
-
u
s
e
d
 
c
o
n
v
e
n
t
i
o
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
&
r
s
q
u
o
;
s
 
w
r
o
n
g
 
w
i
t
h
 
a
n
 
u
n
l
a
b
e
l
e
d
 
a
r
r
o
w
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
N
o
t
h
i
n
g
 
-
 
i
t
&
r
s
q
u
o
;
s
 
c
l
e
a
n
e
r
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
e
r
 
c
a
n
&
r
s
q
u
o
;
t
 
t
e
l
l
 
p
r
o
t
o
c
o
l
 
(
H
T
T
P
?
 
K
a
f
k
a
?
)
 
o
r
 
d
i
r
e
c
t
i
o
n
 
o
f
 
d
a
t
a
 
f
l
o
w
.
"
,


 
 
 
 
 
 
 
 
"
I
t
&
r
s
q
u
o
;
s
 
t
o
o
 
s
h
o
r
t
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
c
o
l
o
r
 
i
s
 
m
i
s
s
i
n
g
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
v
e
r
y
 
a
r
r
o
w
 
s
h
o
u
l
d
 
h
a
v
e
 
a
 
v
e
r
b
 
o
r
 
p
r
o
t
o
c
o
l
:
 
`
P
O
S
T
 
/
o
r
d
e
r
`
,
 
`
p
u
b
l
i
s
h
`
,
 
`
r
e
p
l
i
c
a
t
e
`
.
 
A
m
b
i
g
u
i
t
y
 
c
o
s
t
s
 
p
o
i
n
t
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
d
o
e
s
 
a
 
C
D
N
 
s
i
t
 
i
n
 
f
r
o
n
t
 
o
f
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
Y
o
u
r
 
d
a
t
a
b
a
s
e
"
,


 
 
 
 
 
 
 
 
"
S
t
a
t
i
c
 
c
o
n
t
e
n
t
 
(
i
m
a
g
e
s
,
 
J
S
,
 
v
i
d
e
o
)
 
c
l
o
s
e
 
t
o
 
u
s
e
r
s
"
,


 
 
 
 
 
 
 
 
"
Y
o
u
r
 
q
u
e
u
e
"
,


 
 
 
 
 
 
 
 
"
Y
o
u
r
 
a
u
t
h
 
s
e
r
v
i
c
e
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
D
N
s
 
c
a
c
h
e
 
s
t
a
t
i
c
 
a
s
s
e
t
s
 
a
t
 
e
d
g
e
 
l
o
c
a
t
i
o
n
s
 
w
o
r
l
d
w
i
d
e
.
 
T
h
e
y
 
r
e
d
u
c
e
 
l
a
t
e
n
c
y
 
f
o
r
 
u
s
e
r
s
 
a
n
d
 
s
a
v
e
 
e
g
r
e
s
s
 
c
o
s
t
 
f
o
r
 
y
o
u
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
D
r
a
w
i
n
g
 
A
r
c
h
i
t
e
c
t
u
r
e
 
D
i
a
g
r
a
m
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
5
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
l
i
t
e
r
a
l
 
s
u
r
f
a
c
e
 
a
r
e
a
 
o
f
 
a
n
 
H
L
D
 
w
h
i
t
e
b
o
a
r
d
 
r
o
u
n
d
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


