
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
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
,
 
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
 
A
c
t
i
v
i
t
y
,
 
B
o
o
k
O
p
e
n
,
 
F
i
l
e
T
e
x
t
,
 
G
i
t
B
r
a
n
c
h
,
 
G
l
o
b
e
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
o
t
a
t
e
C
c
w
 
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
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
;


c
o
n
s
t
 
P
U
R
P
L
E
 
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
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




c
o
n
s
t
 
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
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
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
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


c
o
n
s
t
 
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
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
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
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
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
5
,


}
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
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




c
o
n
s
t
 
P
I
L
L
A
R
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
M
e
t
r
i
c
s
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


 
 
 
 
s
h
o
r
t
:
 
"
W
h
a
t
'
s
 
b
r
o
k
e
n
?
 
H
o
w
 
b
r
o
k
e
n
?
"
,


 
 
 
 
l
o
n
g
:
 
"
N
u
m
e
r
i
c
a
l
 
s
a
m
p
l
e
s
 
o
v
e
r
 
t
i
m
e
.
 
C
h
e
a
p
 
t
o
 
s
t
o
r
e
,
 
f
a
s
t
 
t
o
 
q
u
e
r
y
,
 
p
e
r
f
e
c
t
 
f
o
r
 
d
a
s
h
b
o
a
r
d
s
 
a
n
d
 
a
l
e
r
t
s
.
 
L
o
s
e
s
 
i
n
d
i
v
i
d
u
a
l
 
e
v
e
n
t
s
 
—
 
y
o
u
 
c
a
n
 
s
e
e
 
C
P
U
 
i
s
 
a
t
 
9
5
%
 
b
u
t
 
n
o
t
 
w
h
i
c
h
 
r
e
q
u
e
s
t
 
c
a
u
s
e
d
 
i
t
.
"
,


 
 
 
 
e
x
:
 
"
P
r
o
m
e
t
h
e
u
s
,
 
D
a
t
a
d
o
g
,
 
C
l
o
u
d
W
a
t
c
h
.
 
L
a
t
e
n
c
y
 
p
9
9
,
 
r
e
q
u
e
s
t
 
r
a
t
e
,
 
e
r
r
o
r
 
r
a
t
e
,
 
q
u
e
u
e
 
d
e
p
t
h
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
L
o
g
s
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
s
h
o
r
t
:
 
"
W
h
a
t
 
e
x
a
c
t
l
y
 
h
a
p
p
e
n
e
d
?
"
,


 
 
 
 
l
o
n
g
:
 
"
D
i
s
c
r
e
t
e
 
e
v
e
n
t
s
 
w
i
t
h
 
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
 
f
i
e
l
d
s
.
 
H
i
g
h
-
f
i
d
e
l
i
t
y
 
f
o
r
 
i
n
d
i
v
i
d
u
a
l
 
o
c
c
u
r
r
e
n
c
e
s
 
b
u
t
 
e
x
p
e
n
s
i
v
e
 
t
o
 
q
u
e
r
y
 
a
t
 
s
c
a
l
e
.
 
S
h
o
w
 
y
o
u
 
t
h
e
 
l
i
t
e
r
a
l
 
e
x
c
e
p
t
i
o
n
 
t
h
a
t
 
f
i
r
e
d
.
"
,


 
 
 
 
e
x
:
 
"
E
L
K
 
/
 
L
o
k
i
 
/
 
C
l
o
u
d
W
a
t
c
h
 
L
o
g
s
.
 
S
t
a
c
k
 
t
r
a
c
e
s
,
 
r
e
q
u
e
s
t
 
b
o
d
i
e
s
,
 
u
s
e
r
 
a
c
t
i
o
n
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
T
r
a
c
e
s
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
s
h
o
r
t
:
 
"
W
h
e
r
e
 
d
i
d
 
t
h
e
 
t
i
m
e
 
g
o
?
"
,


 
 
 
 
l
o
n
g
:
 
"
D
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
 
s
p
a
n
 
t
r
e
e
s
.
 
O
n
e
 
r
e
q
u
e
s
t
 
b
e
c
o
m
e
s
 
o
n
e
 
t
r
a
c
e
;
 
e
a
c
h
 
s
e
r
v
i
c
e
 
h
o
p
 
i
s
 
a
 
s
p
a
n
 
w
i
t
h
 
t
i
m
i
n
g
.
 
S
h
o
w
s
 
w
h
i
c
h
 
s
e
r
v
i
c
e
/
D
B
 
q
u
e
r
y
 
o
w
n
e
d
 
t
h
e
 
l
a
t
e
n
c
y
.
"
,


 
 
 
 
e
x
:
 
"
J
a
e
g
e
r
,
 
T
e
m
p
o
,
 
A
W
S
 
X
-
R
a
y
.
 
S
p
a
n
 
g
r
a
p
h
s
,
 
c
r
i
t
i
c
a
l
 
p
a
t
h
 
a
n
a
l
y
s
i
s
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
 
D
e
f
i
n
i
t
i
o
n
(
)
 
{


 
 
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
r
e
e
 
p
i
l
l
a
r
s
.
 
E
a
c
h
 
a
n
s
w
e
r
s
 
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
 
q
u
e
s
t
i
o
n
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


 
 
 
 
 
 
 
 
O
b
s
e
r
v
a
b
i
l
i
t
y
 
i
s
 
b
e
i
n
g
 
a
b
l
e
 
t
o
 
a
n
s
w
e
r
 
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
b
o
u
t
 
y
o
u
r
 
s
y
s
t
e
m
 
y
o
u
 
d
i
d
n
&
r
s
q
u
o
;
t
 
p
l
a
n
 
f
o
r
.


 
 
 
 
 
 
 
 
M
e
t
r
i
c
s
 
t
e
l
l
 
y
o
u
 
s
o
m
e
t
h
i
n
g
 
i
s
 
w
r
o
n
g
.
 
L
o
g
s
 
t
e
l
l
 
y
o
u
 
e
x
a
c
t
l
y
 
w
h
a
t
 
h
a
p
p
e
n
e
d
.
 
T
r
a
c
e
s
 
t
e
l
l
 
y
o
u


 
 
 
 
 
 
 
 
w
h
e
r
e
 
t
h
e
 
t
i
m
e
 
w
e
n
t
.
 
M
o
d
e
r
n
 
s
y
s
t
e
m
s
 
c
o
m
b
i
n
e
 
a
l
l
 
t
h
r
e
e
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
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
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
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
3
 
g
a
p
-
3
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
P
I
L
L
A
R
S
.
m
a
p
(
(
p
)
 
=
>
 
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
p
.
k
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
{
 
h
i
d
d
e
n
:
 
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
,
 
v
i
s
i
b
l
e
:
 
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
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
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
6
p
x
 
1
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
p
.
c
o
l
o
r
}
5
5
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
 
`
$
{
p
.
c
o
l
o
r
}
0
8
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


 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
p
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
S
i
z
e
:
 
"
1
r
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
{
p
.
k
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
7
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
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
s
h
o
r
t
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
4
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
 
}
}
>
{
p
.
l
o
n
g
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
 
p
a
d
d
i
n
g
T
o
p
:
 
8
,
 
b
o
r
d
e
r
T
o
p
:
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
p
.
c
o
l
o
r
}
3
3
`
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
7
4
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
 
p
.
c
o
l
o
r
 
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
 
8
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
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
·
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
p
.
e
x
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
o
r
d
e
r
:
 
"
1
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
6
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
 
S
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
1
2
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
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
W
O
R
K
F
L
O
W


 
 
 
 
 
 
 
 
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
6
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
A
 
m
e
t
r
i
c
 
a
l
e
r
t
 
f
i
r
e
s
 
(
l
a
t
e
n
c
y
 
p
9
9
 
s
p
i
k
e
d
)
.
 
Y
o
u
 
g
l
a
n
c
e
 
a
t
 
t
h
e
 
d
a
s
h
b
o
a
r
d
,
 
f
i
n
d
 
t
h
e
 
t
i
m
e


 
 
 
 
 
 
 
 
 
 
w
i
n
d
o
w
,
 
t
h
e
n
 
l
o
o
k
 
a
t
 
l
o
g
s
 
f
r
o
m
 
t
h
a
t
 
w
i
n
d
o
w
 
f
o
r
 
e
r
r
o
r
s
.
 
T
h
e
n
 
y
o
u
 
g
r
a
b
 
a
 
t
r
a
c
e
 
f
r
o
m
 
a


 
 
 
 
 
 
 
 
 
 
s
l
o
w
 
r
e
q
u
e
s
t
 
t
o
 
s
e
e
 
w
h
i
c
h
 
d
o
w
n
s
t
r
e
a
m
 
o
w
n
e
d
 
t
h
e
 
l
a
t
e
n
c
y
.
 
T
h
e
 
t
h
r
e
e
 
p
i
l
l
a
r
s
 
c
o
o
p
e
r
a
t
e
 
v
i
a


 
 
 
 
 
 
 
 
 
 
s
h
a
r
e
d
 
<
b
>
c
o
r
r
e
l
a
t
i
o
n
 
I
D
s
<
/
b
>
 
—
 
t
h
e
 
s
a
m
e
 
r
e
q
u
e
s
t
 
h
a
s
 
t
h
e
 
s
a
m
e
 
I
D
 
a
c
r
o
s
s
 
m
e
t
r
i
c
,
 
l
o
g
,


 
 
 
 
 
 
 
 
 
 
a
n
d
 
t
r
a
c
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
 
2
 
-
 
T
h
r
e
e
 
l
i
n
k
e
d
 
p
a
n
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
e
t
r
i
c
P
o
i
n
t
 
{
 
t
:
 
n
u
m
b
e
r
;
 
p
9
9
:
 
n
u
m
b
e
r
;
 
}




i
n
t
e
r
f
a
c
e
 
L
o
g
L
i
n
e
 
{


 
 
t
:
 
n
u
m
b
e
r
;


 
 
l
e
v
e
l
:
 
"
i
n
f
o
"
 
|
 
"
e
r
r
o
r
"
;


 
 
m
s
g
:
 
s
t
r
i
n
g
;


 
 
t
r
a
c
e
I
d
:
 
s
t
r
i
n
g
;


}




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
p
a
n
 
{


 
 
s
e
r
v
i
c
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
p
:
 
s
t
r
i
n
g
;


 
 
s
t
a
r
t
:
 
n
u
m
b
e
r
;


 
 
d
u
r
a
t
i
o
n
:
 
n
u
m
b
e
r
;


 
 
d
e
p
t
h
:
 
n
u
m
b
e
r
;


 
 
b
a
d
?
:
 
b
o
o
l
e
a
n
;


}




c
o
n
s
t
 
T
I
M
E
L
I
N
E
:
 
M
e
t
r
i
c
P
o
i
n
t
[
]
 
=
 
(
(
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
u
t
:
 
M
e
t
r
i
c
P
o
i
n
t
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
t
 
=
 
0
;
 
t
 
<
=
 
6
0
;
 
t
 
+
=
 
1
)
 
{


 
 
 
 
l
e
t
 
v
 
=
 
8
0
 
+
 
M
a
t
h
.
s
i
n
(
t
 
/
 
5
)
 
*
 
1
5
 
+
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
8
;


 
 
 
 
i
f
 
(
t
 
>
=
 
3
2
 
&
&
 
t
 
<
=
 
3
8
)
 
v
 
+
=
 
4
0
0
 
+
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
6
0
;


 
 
 
 
o
u
t
.
p
u
s
h
(
{
 
t
,
 
p
9
9
:
 
M
a
t
h
.
r
o
u
n
d
(
v
)
 
}
)
;


 
 
}


 
 
r
e
t
u
r
n
 
o
u
t
;


}
)
(
)
;




c
o
n
s
t
 
E
R
R
O
R
_
L
O
G
S
:
 
L
o
g
L
i
n
e
[
]
 
=
 
[


 
 
{
 
t
:
 
3
3
,
 
l
e
v
e
l
:
 
"
e
r
r
o
r
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
t
i
m
e
o
u
t
 
c
a
l
l
i
n
g
 
a
u
t
h
 
(
2
0
0
0
m
s
)
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
0
0
1
"
 
}
,


 
 
{
 
t
:
 
3
4
,
 
l
e
v
e
l
:
 
"
e
r
r
o
r
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
t
i
m
e
o
u
t
 
c
a
l
l
i
n
g
 
a
u
t
h
 
(
2
0
0
0
m
s
)
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
0
0
2
"
 
}
,


 
 
{
 
t
:
 
3
4
,
 
l
e
v
e
l
:
 
"
e
r
r
o
r
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
5
0
3
 
f
r
o
m
 
p
a
y
m
e
n
t
-
g
a
t
e
w
a
y
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
0
0
3
"
 
}
,


 
 
{
 
t
:
 
3
5
,
 
l
e
v
e
l
:
 
"
e
r
r
o
r
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
t
i
m
e
o
u
t
 
c
a
l
l
i
n
g
 
a
u
t
h
 
(
2
0
0
0
m
s
)
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
0
0
4
"
 
}
,


 
 
{
 
t
:
 
3
6
,
 
l
e
v
e
l
:
 
"
e
r
r
o
r
"
,
 
m
s
g
:
 
"
a
u
t
h
:
 
p
o
o
l
 
e
x
h
a
u
s
t
e
d
,
 
n
o
 
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
 
a
v
a
i
l
a
b
l
e
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
0
0
5
"
 
}
,


 
 
{
 
t
:
 
3
7
,
 
l
e
v
e
l
:
 
"
e
r
r
o
r
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
c
i
r
c
u
i
t
 
b
r
e
a
k
e
r
 
O
P
E
N
 
f
o
r
 
a
u
t
h
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
0
0
6
"
 
}
,


]
;




c
o
n
s
t
 
H
E
A
L
T
H
Y
_
L
O
G
S
:
 
L
o
g
L
i
n
e
[
]
 
=
 
[


 
 
{
 
t
:
 
1
0
,
 
l
e
v
e
l
:
 
"
i
n
f
o
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
o
r
d
e
r
 
a
c
c
e
p
t
e
d
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
1
0
0
"
 
}
,


 
 
{
 
t
:
 
2
2
,
 
l
e
v
e
l
:
 
"
i
n
f
o
"
,
 
m
s
g
:
 
"
a
u
t
h
:
 
t
o
k
e
n
 
i
s
s
u
e
d
"
,
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
1
0
1
"
 
}
,


 
 
{
 
t
:
 
4
5
,
 
l
e
v
e
l
:
 
"
i
n
f
o
"
,
 
m
s
g
:
 
"
c
h
e
c
k
o
u
t
:
 
o
r
d
e
r
 
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
 
t
r
a
c
e
I
d
:
 
"
t
r
a
c
e
-
a
b
c
-
1
0
2
"
 
}
,


]
;




c
o
n
s
t
 
S
L
O
W
_
T
R
A
C
E
:
 
S
p
a
n
[
]
 
=
 
[


 
 
{
 
s
e
r
v
i
c
e
:
 
"
c
h
e
c
k
o
u
t
"
,
 
o
p
:
 
"
P
O
S
T
 
/
c
h
e
c
k
o
u
t
"
,
 
s
t
a
r
t
:
 
0
,
 
d
u
r
a
t
i
o
n
:
 
2
0
5
0
,
 
d
e
p
t
h
:
 
0
 
}
,


 
 
{
 
s
e
r
v
i
c
e
:
 
"
c
h
e
c
k
o
u
t
"
,
 
o
p
:
 
"
v
a
l
i
d
a
t
e
 
c
a
r
t
"
,
 
s
t
a
r
t
:
 
5
,
 
d
u
r
a
t
i
o
n
:
 
1
2
,
 
d
e
p
t
h
:
 
1
 
}
,


 
 
{
 
s
e
r
v
i
c
e
:
 
"
a
u
t
h
"
,
 
o
p
:
 
"
v
e
r
i
f
y
 
t
o
k
e
n
"
,
 
s
t
a
r
t
:
 
2
0
,
 
d
u
r
a
t
i
o
n
:
 
2
0
0
0
,
 
d
e
p
t
h
:
 
1
,
 
b
a
d
:
 
t
r
u
e
 
}
,


 
 
{
 
s
e
r
v
i
c
e
:
 
"
p
a
y
m
e
n
t
"
,
 
o
p
:
 
"
c
h
a
r
g
e
 
c
a
r
d
"
,
 
s
t
a
r
t
:
 
2
0
2
5
,
 
d
u
r
a
t
i
o
n
:
 
1
8
,
 
d
e
p
t
h
:
 
1
 
}
,


]
;




c
o
n
s
t
 
F
A
S
T
_
T
R
A
C
E
:
 
S
p
a
n
[
]
 
=
 
[


 
 
{
 
s
e
r
v
i
c
e
:
 
"
c
h
e
c
k
o
u
t
"
,
 
o
p
:
 
"
P
O
S
T
 
/
c
h
e
c
k
o
u
t
"
,
 
s
t
a
r
t
:
 
0
,
 
d
u
r
a
t
i
o
n
:
 
6
5
,
 
d
e
p
t
h
:
 
0
 
}
,


 
 
{
 
s
e
r
v
i
c
e
:
 
"
c
h
e
c
k
o
u
t
"
,
 
o
p
:
 
"
v
a
l
i
d
a
t
e
 
c
a
r
t
"
,
 
s
t
a
r
t
:
 
5
,
 
d
u
r
a
t
i
o
n
:
 
8
,
 
d
e
p
t
h
:
 
1
 
}
,


 
 
{
 
s
e
r
v
i
c
e
:
 
"
a
u
t
h
"
,
 
o
p
:
 
"
v
e
r
i
f
y
 
t
o
k
e
n
"
,
 
s
t
a
r
t
:
 
1
4
,
 
d
u
r
a
t
i
o
n
:
 
2
2
,
 
d
e
p
t
h
:
 
1
 
}
,


 
 
{
 
s
e
r
v
i
c
e
:
 
"
p
a
y
m
e
n
t
"
,
 
o
p
:
 
"
c
h
a
r
g
e
 
c
a
r
d
"
,
 
s
t
a
r
t
:
 
3
8
,
 
d
u
r
a
t
i
o
n
:
 
2
5
,
 
d
e
p
t
h
:
 
1
 
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
 
T
h
r
e
e
P
a
n
e
s
(
)
 
{


 
 
c
o
n
s
t
 
[
t
N
o
w
,
 
s
e
t
T
N
o
w
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
0
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
i
n
g
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
T
,
 
s
e
t
S
e
l
e
c
t
e
d
T
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
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
r
u
n
n
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
T
N
o
w
(
(
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
t
 
+
 
1
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
 
>
 
6
0
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
R
u
n
n
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
6
0
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
2
0
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
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
]
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
T
N
o
w
(
0
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
T
(
n
u
l
l
)
;


 
 
 
 
s
e
t
R
u
n
n
i
n
g
(
f
a
l
s
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
v
i
s
i
b
l
e
M
e
t
r
i
c
s
 
=
 
T
I
M
E
L
I
N
E
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
t
 
<
=
 
t
N
o
w
)
;


 
 
c
o
n
s
t
 
v
i
s
i
b
l
e
E
r
r
o
r
s
 
=
 
E
R
R
O
R
_
L
O
G
S
.
f
i
l
t
e
r
(
(
l
)
 
=
>
 
l
.
t
 
<
=
 
t
N
o
w
)
;


 
 
c
o
n
s
t
 
v
i
s
i
b
l
e
H
e
a
l
t
h
y
 
=
 
H
E
A
L
T
H
Y
_
L
O
G
S
.
f
i
l
t
e
r
(
(
l
)
 
=
>
 
l
.
t
 
<
=
 
t
N
o
w
)
;


 
 
c
o
n
s
t
 
a
l
l
L
o
g
s
 
=
 
[
.
.
.
v
i
s
i
b
l
e
H
e
a
l
t
h
y
,
 
.
.
.
v
i
s
i
b
l
e
E
r
r
o
r
s
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
 
a
.
t
 
-
 
b
.
t
)
;




 
 
c
o
n
s
t
 
i
s
I
n
S
p
i
k
e
 
=
 
s
e
l
e
c
t
e
d
T
 
!
=
=
 
n
u
l
l
 
&
&
 
s
e
l
e
c
t
e
d
T
 
>
=
 
3
2
 
&
&
 
s
e
l
e
c
t
e
d
T
 
<
=
 
3
8
;


 
 
c
o
n
s
t
 
t
r
a
c
e
 
=
 
i
s
I
n
S
p
i
k
e
 
?
 
S
L
O
W
_
T
R
A
C
E
 
:
 
F
A
S
T
_
T
R
A
C
E
;


 
 
c
o
n
s
t
 
t
r
a
c
e
T
o
t
a
l
 
=
 
t
r
a
c
e
[
0
]
?
.
d
u
r
a
t
i
o
n
 
?
?
 
1
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
P
r
e
s
s
 
p
l
a
y
.
 
W
a
t
c
h
 
t
h
e
 
s
p
i
k
e
,
 
t
h
e
 
l
o
g
 
f
l
o
o
d
,
 
t
h
e
 
s
l
o
w
 
t
r
a
c
e
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
 
6
0
-
s
e
c
o
n
d
 
w
i
n
d
o
w
 
w
i
t
h
 
a
 
l
a
t
e
n
c
y
 
s
p
i
k
e
 
a
t
 
t
=
3
2
-
3
8
s
.
 
T
h
e
 
m
e
t
r
i
c
 
l
i
n
e
 
j
u
m
p
s
.
 
E
r
r
o
r
s
 
f
l
o
o
d


 
 
 
 
 
 
 
 
t
h
e
 
l
o
g
.
 
A
 
t
r
a
c
e
 
f
r
o
m
 
i
n
s
i
d
e
 
t
h
e
 
s
p
i
k
e
 
s
h
o
w
s
 
w
h
e
r
e
 
t
h
e
 
t
i
m
e
 
w
e
n
t
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
e
c
o
n
d
 
o
n
 
t
h
e


 
 
 
 
 
 
 
 
c
h
a
r
t
 
t
o
 
d
r
i
l
l
 
i
n
.


 
 
 
 
 
 
<
/
p
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
#
0
b
1
2
2
0
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
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
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
2
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
M
e
t
r
i
c
 
c
h
a
r
t
 
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
s
p
a
c
e
-
b
e
t
w
e
e
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
 
8
 
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
7
4
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
 
S
D
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
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
c
t
i
v
i
t
y
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
E
T
R
I
C
 
·
 
c
h
e
c
k
o
u
t
 
l
a
t
e
n
c
y
 
p
9
9


 
 
 
 
 
 
 
 
 
 
 
 
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
7
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
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
 
=
 
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
t
N
o
w
}
s
<
/
s
p
a
n
>
 
/
 
6
0
s


 
 
 
 
 
 
 
 
 
 
 
 
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
 
6
0
0
 
1
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
0
0
%
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
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
g
r
i
d
l
i
n
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
0
0
,
 
2
0
0
,
 
3
0
0
,
 
4
0
0
,
 
5
0
0
]
.
m
a
p
(
(
y
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
y
}
 
x
1
=
{
0
}
 
x
2
=
{
6
0
0
}
 
y
1
=
{
1
4
0
 
-
 
(
y
 
/
 
5
0
0
)
 
*
 
1
2
0
 
-
 
1
0
}
 
y
2
=
{
1
4
0
 
-
 
(
y
 
/
 
5
0
0
)
 
*
 
1
2
0
 
-
 
1
0
}
 
s
t
r
o
k
e
=
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
0
8
)
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
{
1
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
s
p
i
k
e
 
h
i
g
h
l
i
g
h
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
{
(
3
2
 
/
 
6
0
)
 
*
 
6
0
0
}
 
y
=
{
0
}
 
w
i
d
t
h
=
{
(
(
3
8
 
-
 
3
2
)
 
/
 
6
0
)
 
*
 
6
0
0
}
 
h
e
i
g
h
t
=
{
1
4
0
}
 
f
i
l
l
=
{
`
$
{
W
A
R
N
}
1
4
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
l
i
n
e
 
p
a
t
h
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
s
=
{
v
i
s
i
b
l
e
M
e
t
r
i
c
s
.
m
a
p
(
(
p
)
 
=
>
 
`
$
{
(
p
.
t
 
/
 
6
0
)
 
*
 
6
0
0
}
,
$
{
1
4
0
 
-
 
(
p
.
p
9
9
 
/
 
5
0
0
)
 
*
 
1
2
0
 
-
 
1
0
}
`
)
.
j
o
i
n
(
"
 
"
)
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
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
d
o
t
s
,
 
c
l
i
c
k
a
b
l
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
v
i
s
i
b
l
e
M
e
t
r
i
c
s
.
m
a
p
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
(
p
.
t
 
/
 
6
0
)
 
*
 
6
0
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
1
4
0
 
-
 
(
p
.
p
9
9
 
/
 
5
0
0
)
 
*
 
1
2
0
 
-
 
1
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
p
i
k
e
A
r
e
a
 
=
 
p
.
t
 
>
=
 
3
2
 
&
&
 
p
.
t
 
<
=
 
3
8
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
e
l
 
=
 
s
e
l
e
c
t
e
d
T
 
=
=
=
 
p
.
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
x
=
{
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
s
e
l
 
?
 
5
 
:
 
2
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
i
s
S
p
i
k
e
A
r
e
a
 
?
 
W
A
R
N
 
:
 
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
e
l
 
?
 
"
#
0
b
1
2
2
0
"
 
:
 
"
n
o
n
e
"
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
{
s
e
l
 
?
 
2
 
:
 
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
S
e
l
e
c
t
e
d
T
(
p
.
t
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
s
e
l
e
c
t
e
d
 
v
e
r
t
i
c
a
l
 
l
i
n
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
T
 
!
=
=
 
n
u
l
l
 
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
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
x
1
:
 
(
s
e
l
e
c
t
e
d
T
 
/
 
6
0
)
 
*
 
6
0
0
,
 
x
2
:
 
(
s
e
l
e
c
t
e
d
T
 
/
 
6
0
)
 
*
 
6
0
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
1
4
0
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
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
3
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
T
 
!
=
=
 
n
u
l
l
 
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
e
l
e
c
t
e
d
T
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
 
6
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
7
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
 
N
E
U
T
R
A
L
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
=
{
s
e
l
e
c
t
e
d
T
}
s
 
·
 
p
9
9
 
=
 
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
 
i
s
I
n
S
p
i
k
e
 
?
 
W
A
R
N
 
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
T
I
M
E
L
I
N
E
[
s
e
l
e
c
t
e
d
T
]
?
.
p
9
9
}
m
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
I
n
S
p
i
k
e
 
&
&
 
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
 
W
A
R
N
,
 
m
a
r
g
i
n
L
e
f
t
:
 
1
2
 
}
}
>
(
i
n
s
i
d
e
 
t
h
e
 
s
p
i
k
e
)
<
/
s
p
a
n
>
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


 
 
 
 
 
 
 
 
 
 
)
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
 
L
o
g
s
 
p
a
n
e
 
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
4
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
P
U
R
P
L
E
}
3
3
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
P
U
R
P
L
E
}
0
8
`
,
 
m
i
n
H
e
i
g
h
t
:
 
2
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
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
3
.
5
 
h
-
3
.
5
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
 
P
U
R
P
L
E
 
}
}
 
/
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
7
4
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
 
P
U
R
P
L
E
 
}
}
>
L
O
G
 
·
 
c
h
e
c
k
o
u
t
-
s
e
r
v
i
c
e
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
 
4
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
7
r
e
m
"
 
}
}
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
l
l
L
o
g
s
.
m
a
p
(
(
l
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
l
.
l
e
v
e
l
 
=
=
=
 
"
e
r
r
o
r
"
 
?
 
W
A
R
N
 
:
 
N
E
U
T
R
A
L
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
`
$
{
l
.
t
}
-
$
{
i
}
`
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
 
x
:
 
-
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
 
x
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
2
5
 
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
3
0
p
x
 
5
0
p
x
 
1
f
r
"
,
 
g
a
p
:
 
8
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
4
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
 
4
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
c
}
1
0
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
c
}
2
2
`
 
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
 
N
E
U
T
R
A
L
 
}
}
>
{
S
t
r
i
n
g
(
l
.
t
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
s
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
 
c
o
l
o
r
:
 
c
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
4
e
m
"
 
}
}
>
{
l
.
l
e
v
e
l
.
t
o
U
p
p
e
r
C
a
s
e
(
)
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
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>
{
l
.
m
s
g
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
l
l
L
o
g
s
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>
p
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
a
r
t
 
s
t
r
e
a
m
i
n
g
 
l
o
g
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
T
r
a
c
e
 
p
a
n
e
 
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
4
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
W
A
R
N
}
3
3
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
W
A
R
N
}
0
8
`
,
 
m
i
n
H
e
i
g
h
t
:
 
2
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
B
r
a
n
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
 
W
A
R
N
 
}
}
 
/
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
7
4
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
 
W
A
R
N
 
}
}
>
T
R
A
C
E
 
·
 
{
s
e
l
e
c
t
e
d
T
 
!
=
=
 
n
u
l
l
 
?
 
(
i
s
I
n
S
p
i
k
e
 
?
 
"
t
r
a
c
e
-
a
b
c
-
0
0
2
 
·
 
s
l
o
w
"
 
:
 
"
t
r
a
c
e
-
a
b
c
-
1
0
0
 
·
 
h
e
a
l
t
h
y
"
)
 
:
 
"
(
c
l
i
c
k
 
a
 
m
e
t
r
i
c
 
p
o
i
n
t
)
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
T
 
!
=
=
 
n
u
l
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
6
 
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
7
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
 
N
E
U
T
R
A
L
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
:
 
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
 
i
s
I
n
S
p
i
k
e
 
?
 
W
A
R
N
 
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
t
r
a
c
e
T
o
t
a
l
}
m
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
e
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
f
t
 
=
 
(
s
.
s
t
a
r
t
 
/
 
t
r
a
c
e
T
o
t
a
l
)
 
*
 
1
0
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
i
d
t
h
 
=
 
(
s
.
d
u
r
a
t
i
o
n
 
/
 
t
r
a
c
e
T
o
t
a
l
)
 
*
 
1
0
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
s
.
b
a
d
 
?
 
W
A
R
N
 
:
 
S
D
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
 
k
e
y
=
{
i
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
1
2
0
p
x
 
1
f
r
 
6
0
p
x
"
,
 
g
a
p
:
 
6
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
6
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
 
c
,
 
p
a
d
d
i
n
g
L
e
f
t
:
 
s
.
d
e
p
t
h
 
*
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
d
e
p
t
h
 
>
 
0
 
?
 
"
└
 
"
 
:
 
"
"
}
{
s
.
s
e
r
v
i
c
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
 
p
o
s
i
t
i
o
n
:
 
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
,
 
h
e
i
g
h
t
:
 
1
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
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
0
8
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
 
3
 
}
}
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
 
w
i
d
t
h
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
 
w
i
d
t
h
:
 
`
$
{
w
i
d
t
h
}
%
`
 
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
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
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
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
`
$
{
l
e
f
t
}
%
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
t
t
o
m
:
 
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
 
c
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
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
0
.
8
5
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
6
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
 
c
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
r
i
g
h
t
"
 
}
}
>
{
s
.
d
u
r
a
t
i
o
n
}
m
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
I
n
S
p
i
k
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
4
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
W
A
R
N
}
1
4
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
W
A
R
N
}
5
5
`
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
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
u
t
h
 
s
p
a
n
 
o
w
n
e
d
 
9
7
%
 
o
f
 
t
h
e
 
l
a
t
e
n
c
y
.
 
C
h
e
c
k
 
a
u
t
h
 
p
o
o
l
 
/
 
D
B
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
7
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
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
i
c
k
 
a
n
y
 
p
o
i
n
t
 
o
n
 
t
h
e
 
m
e
t
r
i
c
 
c
h
a
r
t
 
t
o
 
l
o
a
d
 
i
t
s
 
t
r
a
c
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
5
 
f
l
e
x
-
w
r
a
p
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
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
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
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
P
l
a
y
 
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
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
t
N
o
w
 
>
=
 
6
0
 
?
 
"
r
e
p
l
a
y
"
 
:
 
t
N
o
w
 
>
 
0
 
?
 
"
r
e
s
u
m
e
"
 
:
 
"
p
l
a
y
"
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
b
u
t
t
o
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
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
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
b
t
n
(
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
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
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
8
p
x
 
1
4
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
c
o
l
o
r
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
c
o
l
o
r
}
1
8
`
,
 
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
 
T
h
e
 
f
o
u
r
 
g
o
l
d
e
n
 
s
i
g
n
a
l
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




c
o
n
s
t
 
S
I
G
N
A
L
S
 
=
 
[


 
 
{
 
k
:
 
"
L
a
t
e
n
c
y
"
,
 
v
:
 
"
H
o
w
 
l
o
n
g
 
r
e
q
u
e
s
t
s
 
t
a
k
e
.
 
T
r
a
c
k
 
p
5
0
,
 
p
9
5
,
 
p
9
9
 
—
 
a
v
e
r
a
g
e
s
 
l
i
e
.
 
p
9
9
 
s
u
r
f
a
c
e
s
 
t
h
e
 
s
l
o
w
 
t
a
i
l
 
u
s
e
r
s
 
c
o
m
p
l
a
i
n
 
a
b
o
u
t
.
"
,
 
e
x
:
 
"
p
9
9
 
l
a
t
e
n
c
y
 
≤
 
2
0
0
m
s
.
 
A
l
e
r
t
 
a
t
 
4
0
0
m
s
.
"
 
}
,


 
 
{
 
k
:
 
"
T
r
a
f
f
i
c
"
,
 
v
:
 
"
R
e
q
u
e
s
t
 
r
a
t
e
 
o
r
 
t
h
r
o
u
g
h
p
u
t
.
 
T
h
e
 
d
e
n
o
m
i
n
a
t
o
r
 
b
e
h
i
n
d
 
e
v
e
r
y
 
o
t
h
e
r
 
r
a
t
i
o
.
"
,
 
e
x
:
 
"
R
P
S
,
 
q
u
e
r
i
e
s
/
s
e
c
,
 
c
o
n
c
u
r
r
e
n
t
 
u
s
e
r
s
.
"
 
}
,


 
 
{
 
k
:
 
"
E
r
r
o
r
s
"
,
 
v
:
 
"
R
a
t
e
 
o
f
 
f
a
i
l
e
d
 
r
e
q
u
e
s
t
s
,
 
b
y
 
H
T
T
P
 
c
o
d
e
 
o
r
 
a
p
p
-
l
e
v
e
l
 
r
e
a
s
o
n
.
 
D
i
s
t
i
n
g
u
i
s
h
 
4
x
x
 
(
c
l
i
e
n
t
)
 
f
r
o
m
 
5
x
x
 
(
s
e
r
v
e
r
)
.
"
,
 
e
x
:
 
"
5
x
x
 
r
a
t
e
 
>
 
1
%
 
f
o
r
 
5
 
m
i
n
 
→
 
p
a
g
e
.
"
 
}
,


 
 
{
 
k
:
 
"
S
a
t
u
r
a
t
i
o
n
"
,
 
v
:
 
"
H
o
w
 
f
u
l
l
 
y
o
u
r
 
r
e
s
o
u
r
c
e
s
 
a
r
e
.
 
C
P
U
,
 
m
e
m
o
r
y
,
 
q
u
e
u
e
 
d
e
p
t
h
,
 
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
 
p
o
o
l
.
 
T
h
e
 
l
e
a
d
i
n
g
 
i
n
d
i
c
a
t
o
r
 
o
f
 
l
a
t
e
n
c
y
 
d
e
g
r
a
d
a
t
i
o
n
.
"
,
 
e
x
:
 
"
P
o
d
 
C
P
U
 
>
 
8
0
%
 
f
o
r
 
1
0
 
m
i
n
.
"
 
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
 
G
o
l
d
e
n
S
i
g
n
a
l
s
(
)
 
{


 
 
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
 
f
o
u
r
 
s
i
g
n
a
l
s
 
e
v
e
r
y
 
s
e
r
v
i
c
e
 
s
h
o
u
l
d
 
e
x
p
o
s
e
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


 
 
 
 
 
 
 
 
F
r
o
m
 
G
o
o
g
l
e
&
r
s
q
u
o
;
s
 
S
R
E
 
b
o
o
k
.
 
E
v
e
r
y
 
s
e
r
v
i
c
e
 
s
h
o
u
l
d
 
e
x
p
o
s
e
 
t
h
e
s
e
 
f
o
u
r
 
m
e
t
r
i
c
s
;
 
e
v
e
r
y
 
a
l
e
r
t


 
 
 
 
 
 
 
 
s
h
o
u
l
d
 
d
e
r
i
v
e
 
f
r
o
m
 
t
h
e
m
.
 
T
h
e
y
 
c
o
v
e
r
 
w
h
a
t
 
u
s
e
r
s
 
s
e
e
 
(
l
a
t
e
n
c
y
,
 
e
r
r
o
r
s
)
,
 
h
o
w
 
l
o
a
d
e
d
 
t
h
e


 
 
 
 
 
 
 
 
s
y
s
t
e
m
 
i
s
 
(
t
r
a
f
f
i
c
,
 
s
a
t
u
r
a
t
i
o
n
)
,
 
a
n
d
 
t
e
l
l
 
y
o
u
 
t
h
e
 
d
i
f
f
e
r
e
n
c
e
 
b
e
t
w
e
e
n
 
a
 
r
e
a
l
 
o
u
t
a
g
e
 
a
n
d
 
a


 
 
 
 
 
 
 
 
c
a
p
a
c
i
t
y
 
p
r
o
b
l
e
m
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
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
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
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
8
 
}
 
}
 
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
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
I
G
N
A
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
k
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
{
 
h
i
d
d
e
n
:
 
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
 
8
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
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
{
 
y
:
 
-
2
 
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
 
4
0
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
5
 
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
4
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
:
 
"
1
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
{
s
.
k
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
8
4
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
 
8
 
}
}
>
{
s
.
v
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
7
4
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
6
p
x
 
1
0
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
 
4
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
S
D
}
1
0
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
S
D
}
3
3
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
 
8
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
R
i
g
h
t
:
 
4
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
S
L
O
 
·
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
e
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
 
 
A
c
t
i
v
i
t
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
6
_
O
b
s
e
r
v
a
b
i
l
i
t
y
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
d
e
f
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
e
f
i
n
i
t
i
o
n
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
o
k
O
p
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
a
n
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
r
e
e
 
P
a
n
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
A
c
t
i
v
i
t
y
 
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
T
h
r
e
e
P
a
n
e
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
g
o
l
d
e
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
G
o
l
d
e
n
 
S
i
g
n
a
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
G
l
o
b
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
G
o
l
d
e
n
S
i
g
n
a
l
s
 
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
Y
o
u
 
c
a
n
 
o
n
l
y
 
a
f
f
o
r
d
 
o
n
e
 
o
f
 
m
e
t
r
i
c
s
,
 
l
o
g
s
,
 
o
r
 
t
r
a
c
e
s
.
 
T
h
e
 
t
e
a
m
 
i
s
 
s
m
a
l
l
.
 
P
i
c
k
 
o
n
e
 
f
o
r
 
p
r
o
d
u
c
t
i
o
n
 
a
l
e
r
t
i
n
g
.
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
L
o
g
s
 
—
 
t
h
e
y
 
h
a
v
e
 
e
v
e
r
y
t
h
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
M
e
t
r
i
c
s
 
—
 
c
h
e
a
p
 
t
o
 
q
u
e
r
y
 
a
t
 
s
c
a
l
e
,
 
p
e
r
f
e
c
t
 
f
o
r
 
a
l
e
r
t
s
 
a
n
d
 
d
a
s
h
b
o
a
r
d
s
.
 
A
d
d
 
l
o
g
s
 
a
n
d
 
t
r
a
c
e
s
 
a
s
 
y
o
u
 
s
c
a
l
e
.
"
,


 
 
 
 
 
 
 
 
"
T
r
a
c
e
s
 
—
 
t
h
e
y
 
s
h
o
w
 
e
v
e
r
y
t
h
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
N
o
n
e
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
M
e
t
r
i
c
s
 
a
r
e
 
t
h
e
 
m
o
s
t
 
c
o
s
t
-
e
f
f
e
c
t
i
v
e
 
s
t
a
r
t
i
n
g
 
p
o
i
n
t
.
 
T
h
e
y
 
t
e
l
l
 
y
o
u
 
w
h
a
t
'
s
 
b
r
o
k
e
n
 
a
n
d
 
h
o
w
 
b
r
o
k
e
n
.
 
L
o
g
s
 
a
n
d
 
t
r
a
c
e
s
 
a
d
d
 
c
o
s
t
 
b
u
t
 
b
e
c
o
m
e
 
i
n
v
a
l
u
a
b
l
e
 
f
o
r
 
t
h
e
 
'
e
x
a
c
t
l
y
 
w
h
a
t
 
h
a
p
p
e
n
e
d
'
 
a
n
d
 
'
w
h
e
r
e
 
d
i
d
 
t
h
e
 
t
i
m
e
 
g
o
'
 
q
u
e
s
t
i
o
n
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
T
h
e
 
m
e
t
r
i
c
 
d
a
s
h
b
o
a
r
d
 
s
h
o
w
s
 
p
9
9
 
l
a
t
e
n
c
y
 
s
p
i
k
e
d
 
a
t
 
1
4
:
3
2
.
 
B
e
s
t
 
n
e
x
t
 
s
t
e
p
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
s
t
a
r
t
 
t
h
e
 
s
e
r
v
i
c
e
.
"
,


 
 
 
 
 
 
 
 
"
P
u
l
l
 
l
o
g
s
 
f
r
o
m
 
1
4
:
3
2
 
±
 
3
0
s
 
f
o
r
 
e
r
r
o
r
s
,
 
t
h
e
n
 
s
a
m
p
l
e
 
a
 
s
l
o
w
 
t
r
a
c
e
 
f
r
o
m
 
t
h
e
 
s
a
m
e
 
w
i
n
d
o
w
.
"
,


 
 
 
 
 
 
 
 
"
I
n
c
r
e
a
s
e
 
r
e
p
l
i
c
a
s
.
"
,


 
 
 
 
 
 
 
 
"
W
a
i
t
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
M
e
t
r
i
c
s
 
t
e
l
l
 
y
o
u
 
s
o
m
e
t
h
i
n
g
 
i
s
 
w
r
o
n
g
.
 
L
o
g
s
 
a
n
d
 
t
r
a
c
e
s
 
t
e
l
l
 
y
o
u
 
w
h
a
t
 
a
n
d
 
w
h
e
r
e
.
 
W
i
t
h
o
u
t
 
t
h
a
t
 
d
r
i
l
l
-
d
o
w
n
,
 
y
o
u
'
r
e
 
g
u
e
s
s
i
n
g
 
a
t
 
t
h
e
 
c
a
u
s
e
 
a
n
d
 
r
i
s
k
 
m
a
k
i
n
g
 
i
t
 
w
o
r
s
e
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
y
 
a
r
e
 
c
o
r
r
e
l
a
t
i
o
n
 
I
D
s
 
(
t
r
a
c
e
 
I
D
s
)
 
o
n
 
l
o
g
 
l
i
n
e
s
 
s
o
 
i
m
p
o
r
t
a
n
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
D
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
l
i
n
k
 
a
 
s
i
n
g
l
e
 
u
s
e
r
 
r
e
q
u
e
s
t
 
a
c
r
o
s
s
 
s
e
r
v
i
c
e
s
 
s
o
 
y
o
u
 
c
a
n
 
f
i
n
d
 
e
v
e
r
y
 
l
o
g
 
l
i
n
e
 
a
n
d
 
s
p
a
n
 
f
o
r
 
o
n
e
 
t
r
a
c
e
,
 
e
v
e
n
 
w
h
e
n
 
1
0
0
0
s
 
o
f
 
u
s
e
r
s
 
a
r
e
 
c
o
n
c
u
r
r
e
n
t
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
s
p
e
e
d
 
u
p
 
l
o
g
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
c
o
m
p
r
e
s
s
 
d
a
t
a
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
W
i
t
h
o
u
t
 
a
 
t
r
a
c
e
 
I
D
,
 
y
o
u
 
c
a
n
'
t
 
t
e
l
l
 
w
h
i
c
h
 
l
o
g
s
 
a
c
r
o
s
s
 
s
e
r
v
i
c
e
s
 
b
e
l
o
n
g
 
t
o
 
w
h
i
c
h
 
r
e
q
u
e
s
t
.
 
W
i
t
h
 
i
t
,
 
o
n
e
 
c
l
i
c
k
 
j
u
m
p
s
 
f
r
o
m
 
a
 
s
l
o
w
 
t
r
a
c
e
 
t
o
 
a
l
l
 
l
o
g
s
 
f
r
o
m
 
t
h
a
t
 
r
e
q
u
e
s
t
,
 
i
n
 
e
v
e
r
y
 
s
e
r
v
i
c
e
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
y
 
d
o
 
S
R
E
s
 
p
r
e
f
e
r
 
p
9
9
 
l
a
t
e
n
c
y
 
o
v
e
r
 
a
v
e
r
a
g
e
 
l
a
t
e
n
c
y
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
I
t
'
s
 
b
i
g
g
e
r
.
"
,


 
 
 
 
 
 
 
 
"
A
v
e
r
a
g
e
s
 
h
i
d
e
 
t
a
i
l
 
l
a
t
e
n
c
y
.
 
A
 
f
e
w
 
e
x
t
r
e
m
e
 
o
u
t
l
i
e
r
s
 
(
t
h
e
 
s
l
o
w
 
r
e
q
u
e
s
t
s
 
u
s
e
r
s
 
a
c
t
u
a
l
l
y
 
c
o
m
p
l
a
i
n
 
a
b
o
u
t
)
 
g
e
t
 
d
r
o
w
n
e
d
 
o
u
t
 
b
y
 
t
h
o
u
s
a
n
d
s
 
o
f
 
f
a
s
t
 
o
n
e
s
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
s
t
a
n
d
a
r
d
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
u
s
e
s
 
l
e
s
s
 
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
I
f
 
9
9
%
 
o
f
 
r
e
q
u
e
s
t
s
 
c
o
m
p
l
e
t
e
 
i
n
 
5
0
m
s
 
a
n
d
 
1
%
 
t
a
k
e
 
5
s
,
 
t
h
e
 
a
v
e
r
a
g
e
 
l
o
o
k
s
 
f
i
n
e
 
b
u
t
 
1
 
i
n
 
1
0
0
 
u
s
e
r
s
 
i
s
 
a
n
g
r
y
.
 
p
9
9
 
s
u
r
f
a
c
e
s
 
t
h
a
t
 
t
a
i
l
.
 
p
9
9
9
 
(
9
9
.
9
%
)
 
g
o
e
s
 
o
n
e
 
f
u
r
t
h
e
r
 
f
o
r
 
h
i
g
h
-
t
r
a
f
f
i
c
 
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
M
e
t
r
i
c
s
,
 
L
o
g
s
 
&
 
T
r
a
c
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
6
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
 
'
h
o
w
 
d
o
 
y
o
u
 
d
e
b
u
g
 
a
 
p
r
o
d
u
c
t
i
o
n
 
i
s
s
u
e
'
 
a
n
s
w
e
r
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


