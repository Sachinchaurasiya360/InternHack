
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
R
e
f
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
 
B
o
o
k
O
p
e
n
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
,
 
S
h
i
e
l
d
A
l
e
r
t
,
 
Z
a
p
 
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
 
S
T
A
T
E
S
 
=
 
[


 
 
{
 
k
:
 
"
C
l
o
s
e
d
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
 
w
h
a
t
:
 
"
N
o
r
m
a
l
.
 
R
e
q
u
e
s
t
s
 
f
l
o
w
 
t
h
r
o
u
g
h
.
 
F
a
i
l
u
r
e
s
 
a
r
e
 
c
o
u
n
t
e
d
.
"
 
}
,


 
 
{
 
k
:
 
"
O
p
e
n
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
 
w
h
a
t
:
 
"
T
h
r
e
s
h
o
l
d
 
t
r
i
p
p
e
d
.
 
A
l
l
 
r
e
q
u
e
s
t
s
 
i
n
s
t
a
n
t
l
y
 
f
a
i
l
 
w
i
t
h
o
u
t
 
h
i
t
t
i
n
g
 
t
h
e
 
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
.
 
S
a
v
e
s
 
t
h
e
 
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
 
f
r
o
m
 
d
e
a
t
h
 
b
y
 
r
e
t
r
y
 
s
t
o
r
m
.
"
 
}
,


 
 
{
 
k
:
 
"
H
a
l
f
-
O
p
e
n
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
 
w
h
a
t
:
 
"
A
f
t
e
r
 
c
o
o
l
d
o
w
n
,
 
a
 
f
e
w
 
p
r
o
b
e
 
r
e
q
u
e
s
t
s
 
a
r
e
 
a
l
l
o
w
e
d
.
 
I
f
 
t
h
e
y
 
s
u
c
c
e
e
d
,
 
c
l
o
s
e
.
 
I
f
 
t
h
e
y
 
f
a
i
l
,
 
o
p
e
n
 
a
g
a
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
A
 
b
r
e
a
k
e
r
 
t
h
a
t
 
t
r
i
p
s
 
b
e
f
o
r
e
 
y
o
u
r
 
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
 
d
i
e
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


 
 
 
 
 
 
 
 
A
 
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
 
w
a
t
c
h
e
s
 
t
h
e
 
s
u
c
c
e
s
s
/
f
a
i
l
u
r
e
 
r
a
t
e
 
o
f
 
c
a
l
l
s
 
t
o
 
a
 
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
 
s
e
r
v
i
c
e
.
 
W
h
e
n


 
 
 
 
 
 
 
 
f
a
i
l
u
r
e
s
 
e
x
c
e
e
d
 
a
 
t
h
r
e
s
h
o
l
d
,
 
i
t
 
<
b
>
o
p
e
n
s
<
/
b
>
 
—
 
e
v
e
r
y
 
s
u
b
s
e
q
u
e
n
t
 
c
a
l
l
 
f
a
i
l
s
 
f
a
s
t
 
w
i
t
h
o
u
t


 
 
 
 
 
 
 
 
h
i
t
t
i
n
g
 
t
h
e
 
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
.
 
A
f
t
e
r
 
a
 
c
o
o
l
d
o
w
n
,
 
i
t
 
l
e
t
s
 
a
 
f
e
w
 
r
e
q
u
e
s
t
s
 
p
r
o
b
e
 
(
<
b
>
h
a
l
f
-
o
p
e
n
<
/
b
>
)
;


 
 
 
 
 
 
 
 
i
f
 
t
h
e
y
 
s
u
c
c
e
e
d
,
 
i
t
 
c
l
o
s
e
s
.
 
T
h
r
e
e
 
s
t
a
t
e
s
.
 
O
n
e
 
j
o
b
:
 
s
t
o
p
 
a
 
s
l
o
w
 
d
e
a
t
h
 
f
r
o
m
 
b
e
c
o
m
i
n
g
 
a
 
f
a
s
t


 
 
 
 
 
 
 
 
c
a
s
c
a
d
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
S
T
A
T
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
s
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
s
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
2
2
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
A
l
e
r
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
 
s
.
c
o
l
o
r
 
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
 
s
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
0
.
9
5
r
e
m
"
 
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
s
.
w
h
a
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


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
<
b
>
N
e
t
f
l
i
x
 
H
y
s
t
r
i
x
<
/
b
>
 
m
a
d
e
 
t
h
e
 
p
a
t
t
e
r
n
 
f
a
m
o
u
s
 
(
n
o
w
 
i
n
 
m
a
i
n
t
e
n
a
n
c
e
;
 
<
b
>
R
e
s
i
l
i
e
n
c
e
4
j
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
i
s
 
t
h
e
 
J
V
M
 
s
u
c
c
e
s
s
o
r
)
.
 
<
b
>
I
s
t
i
o
<
/
b
>
 
e
x
p
o
s
e
s
 
c
i
r
c
u
i
t
-
b
r
e
a
k
e
r
 
r
u
l
e
s
 
p
e
r


 
 
 
 
 
 
 
 
 
 
d
e
s
t
i
n
a
t
i
o
n
.
 
<
b
>
A
W
S
 
A
p
p
 
M
e
s
h
<
/
b
>
 
s
h
i
p
s
 
t
h
e
m
 
a
t
 
t
h
e
 
s
i
d
e
c
a
r
.
 
W
h
e
n
e
v
e
r
 
a
n
 
o
u
t
a
g
e


 
 
 
 
 
 
 
 
 
 
p
o
s
t
m
o
r
t
e
m
 
s
a
y
s
 
&
l
d
q
u
o
;
a
 
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
 
s
l
o
w
d
o
w
n
 
c
a
u
s
e
d
 
o
u
r
 
s
e
r
v
i
c
e
 
t
o
 
f
a
l
l
 
o
v
e
r
,
&
r
d
q
u
o
;
 
t
h
e


 
 
 
 
 
 
 
 
 
 
m
i
s
s
i
n
g
 
p
i
e
c
e
 
i
s
 
u
s
u
a
l
l
y
 
a
 
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
 
A
n
i
m
a
t
e
d
 
s
t
a
t
e
 
m
a
c
h
i
n
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




t
y
p
e
 
C
B
S
t
a
t
e
 
=
 
"
c
l
o
s
e
d
"
 
|
 
"
o
p
e
n
"
 
|
 
"
h
a
l
f
-
o
p
e
n
"
;




c
o
n
s
t
 
F
A
I
L
_
T
H
R
E
S
H
O
L
D
 
=
 
5
;


c
o
n
s
t
 
C
O
O
L
D
O
W
N
_
M
S
 
=
 
4
0
0
0
;




i
n
t
e
r
f
a
c
e
 
C
a
l
l
 
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


 
 
r
e
s
u
l
t
:
 
"
o
k
"
 
|
 
"
f
a
i
l
"
 
|
 
"
f
a
s
t
-
f
a
i
l
"
;


 
 
s
t
a
t
e
:
 
C
B
S
t
a
t
e
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
 
C
i
r
c
u
i
t
B
r
e
a
k
e
r
D
e
m
o
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
t
a
t
e
,
 
s
e
t
S
t
a
t
e
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
C
B
S
t
a
t
e
>
(
"
c
l
o
s
e
d
"
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
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
H
e
a
l
t
h
,
 
s
e
t
D
o
w
n
s
t
r
e
a
m
H
e
a
l
t
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
<
"
h
e
a
l
t
h
y
"
 
|
 
"
f
a
i
l
i
n
g
"
>
(
"
h
e
a
l
t
h
y
"
)
;


 
 
c
o
n
s
t
 
[
r
e
c
e
n
t
F
a
i
l
s
,
 
s
e
t
R
e
c
e
n
t
F
a
i
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
0
)
;


 
 
c
o
n
s
t
 
[
c
a
l
l
s
,
 
s
e
t
C
a
l
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
<
C
a
l
l
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
i
d
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
o
p
e
n
e
d
A
t
R
e
f
 
=
 
u
s
e
R
e
f
<
n
u
m
b
e
r
>
(
0
)
;




 
 
/
/
 
T
i
c
k
:
 
s
e
n
d
 
a
 
c
a
l
l
 
e
v
e
r
y
 
5
0
0
m
s


 
 
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


 
 
 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
+
+
i
d
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
 
 
c
o
n
s
t
 
n
o
w
 
=
 
D
a
t
e
.
n
o
w
(
)
;




 
 
 
 
 
 
/
/
 
H
a
l
f
-
o
p
e
n
 
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
 
a
f
t
e
r
 
c
o
o
l
d
o
w
n


 
 
 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
o
p
e
n
"
 
&
&
 
n
o
w
 
-
 
o
p
e
n
e
d
A
t
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
C
O
O
L
D
O
W
N
_
M
S
)
 
{


 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
e
(
"
h
a
l
f
-
o
p
e
n
"
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
l
e
t
 
r
e
s
u
l
t
:
 
C
a
l
l
[
"
r
e
s
u
l
t
"
]
;


 
 
 
 
 
 
l
e
t
 
n
e
x
t
S
t
a
t
e
:
 
C
B
S
t
a
t
e
 
=
 
s
t
a
t
e
;




 
 
 
 
 
 
i
f
 
(
s
t
a
t
e
 
=
=
=
 
"
o
p
e
n
"
)
 
{


 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
"
f
a
s
t
-
f
a
i
l
"
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
t
a
t
e
 
=
=
=
 
"
h
a
l
f
-
o
p
e
n
"
)
 
{


 
 
 
 
 
 
 
 
/
/
 
p
r
o
b
e


 
 
 
 
 
 
 
 
i
f
 
(
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
H
e
a
l
t
h
 
=
=
=
 
"
h
e
a
l
t
h
y
"
)
 
{


 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
"
o
k
"
;


 
 
 
 
 
 
 
 
 
 
n
e
x
t
S
t
a
t
e
 
=
 
"
c
l
o
s
e
d
"
;


 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
c
e
n
t
F
a
i
l
s
(
0
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
"
f
a
i
l
"
;


 
 
 
 
 
 
 
 
 
 
n
e
x
t
S
t
a
t
e
 
=
 
"
o
p
e
n
"
;


 
 
 
 
 
 
 
 
 
 
o
p
e
n
e
d
A
t
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
o
w
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
/
/
 
c
l
o
s
e
d


 
 
 
 
 
 
 
 
i
f
 
(
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
H
e
a
l
t
h
 
=
=
=
 
"
h
e
a
l
t
h
y
"
)
 
{


 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
"
o
k
"
;


 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
c
e
n
t
F
a
i
l
s
(
(
f
)
 
=
>
 
M
a
t
h
.
m
a
x
(
0
,
 
f
 
-
 
1
)
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
"
f
a
i
l
"
;


 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
c
e
n
t
F
a
i
l
s
(
(
f
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
f
 
=
 
f
 
+
 
1
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
n
f
 
>
=
 
F
A
I
L
_
T
H
R
E
S
H
O
L
D
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
e
x
t
S
t
a
t
e
 
=
 
"
o
p
e
n
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
e
d
A
t
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
o
w
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
f
;


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}




 
 
 
 
 
 
i
f
 
(
n
e
x
t
S
t
a
t
e
 
!
=
=
 
s
t
a
t
e
)
 
s
e
t
S
t
a
t
e
(
n
e
x
t
S
t
a
t
e
)
;


 
 
 
 
 
 
s
e
t
C
a
l
l
s
(
(
c
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
 
n
e
x
t
 
=
 
[
.
.
.
c
s
,
 
{
 
i
d
,
 
r
e
s
u
l
t
,
 
s
t
a
t
e
:
 
n
e
x
t
S
t
a
t
e
 
}
]
;


 
 
 
 
 
 
 
 
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
.
l
e
n
g
t
h
 
>
 
1
8
 
?
 
n
e
x
t
.
s
l
i
c
e
(
n
e
x
t
.
l
e
n
g
t
h
 
-
 
1
8
)
 
:
 
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
 
5
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
,
 
s
t
a
t
e
,
 
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
H
e
a
l
t
h
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
S
t
a
t
e
(
"
c
l
o
s
e
d
"
)
;


 
 
 
 
s
e
t
R
e
c
e
n
t
F
a
i
l
s
(
0
)
;


 
 
 
 
s
e
t
C
a
l
l
s
(
[
]
)
;


 
 
 
 
s
e
t
D
o
w
n
s
t
r
e
a
m
H
e
a
l
t
h
(
"
h
e
a
l
t
h
y
"
)
;


 
 
 
 
i
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
o
p
e
n
e
d
A
t
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
}
;




 
 
c
o
n
s
t
 
s
t
a
t
e
C
o
l
o
r
 
=
 
s
t
a
t
e
 
=
=
=
 
"
c
l
o
s
e
d
"
 
?
 
S
D
 
:
 
s
t
a
t
e
 
=
=
=
 
"
o
p
e
n
"
 
?
 
W
A
R
N
 
:
 
P
U
R
P
L
E
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
I
n
j
e
c
t
 
f
a
i
l
u
r
e
s
.
 
W
a
t
c
h
 
t
h
e
 
b
r
e
a
k
e
r
 
t
r
i
p
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


 
 
 
 
 
 
 
 
T
o
g
g
l
e
 
t
h
e
 
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
 
b
e
t
w
e
e
n
 
h
e
a
l
t
h
y
 
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
.
 
W
i
t
h
 
5
 
c
o
n
s
e
c
u
t
i
v
e
 
f
a
i
l
u
r
e
s
 
t
h
e
 
b
r
e
a
k
e
r
{
"
 
"
}


 
 
 
 
 
 
 
 
<
b
>
o
p
e
n
s
<
/
b
>
 
—
 
e
v
e
r
y
 
s
u
b
s
e
q
u
e
n
t
 
c
a
l
l
 
f
a
s
t
-
f
a
i
l
s
 
f
o
r
 
4
s
.
 
A
f
t
e
r
 
c
o
o
l
d
o
w
n
 
i
t
 
g
o
e
s
{
"
 
"
}


 
 
 
 
 
 
 
 
<
b
>
h
a
l
f
-
o
p
e
n
<
/
b
>
 
a
n
d
 
p
r
o
b
e
s
.
 
I
f
 
y
o
u
&
r
s
q
u
o
;
v
e
 
f
l
i
p
p
e
d
 
t
h
e
 
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
 
b
a
c
k
 
t
o
 
h
e
a
l
t
h
y
 
b
y
 
t
h
e
n
,


 
 
 
 
 
 
 
 
i
t
 
c
l
o
s
e
s
.


 
 
 
 
 
 
<
/
p
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
b
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
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
(
[
"
h
e
a
l
t
h
y
"
,
 
"
f
a
i
l
i
n
g
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
h
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
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
H
e
a
l
t
h
 
=
=
=
 
h
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
h
 
=
=
=
 
"
h
e
a
l
t
h
y
"
 
?
 
S
D
 
:
 
W
A
R
N
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
D
o
w
n
s
t
r
e
a
m
H
e
a
l
t
h
(
h
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
a
c
t
i
v
e
 
?
 
c
 
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
2
5
)
"
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
 
a
c
t
i
v
e
 
?
 
`
$
{
c
}
1
8
`
 
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
 
a
c
t
i
v
e
 
?
 
c
 
:
 
"
#
9
4
a
3
b
8
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
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
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


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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
 
S
t
a
t
e
 
m
a
c
h
i
n
e
 
v
i
z
 
*
/
}


 
 
 
 
 
 
 
 
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
 
7
2
0
 
2
0
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
 
m
a
x
W
i
d
t
h
:
 
7
6
0
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
b
l
o
c
k
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
 
a
u
t
o
 
1
8
p
x
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
(
[
"
c
l
o
s
e
d
"
,
 
"
h
a
l
f
-
o
p
e
n
"
,
 
"
o
p
e
n
"
]
 
a
s
 
C
B
S
t
a
t
e
[
]
)
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
 
x
 
=
 
8
0
 
+
 
i
 
*
 
2
8
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
 
=
=
=
 
"
c
l
o
s
e
d
"
 
?
 
S
D
 
:
 
s
 
=
=
=
 
"
o
p
e
n
"
 
?
 
W
A
R
N
 
:
 
P
U
R
P
L
E
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
 
s
t
a
t
e
 
=
=
=
 
s
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
s
}
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
6
0
)
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
 
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
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
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
.
3
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
 
0
,
 
s
c
a
l
e
:
 
1
.
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
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
4
2
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
 
f
i
l
l
:
 
a
c
t
i
v
e
 
?
 
`
$
{
c
}
3
3
`
 
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
 
s
t
r
o
k
e
:
 
c
,
 
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
:
 
a
c
t
i
v
e
 
?
 
2
.
5
 
:
 
1
.
5
 
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
0
}
 
y
=
{
-
4
}
 
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
i
l
l
=
{
c
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
{
1
2
}
 
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
{
8
0
0
}
 
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
=
"
0
.
0
4
e
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
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
{
0
}
 
y
=
{
1
4
}
 
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
i
l
l
=
{
N
E
U
T
R
A
L
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
{
9
}
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
 
=
=
=
 
"
c
l
o
s
e
d
"
 
?
 
"
n
o
r
m
a
l
"
 
:
 
s
 
=
=
=
 
"
o
p
e
n
"
 
?
 
"
f
a
s
t
-
f
a
i
l
"
 
:
 
"
p
r
o
b
i
n
g
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
{
/
*
 
a
r
r
o
w
s
 
b
e
t
w
e
e
n
 
s
t
a
t
e
s
 
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
{
1
2
0
}
 
y
1
=
{
6
0
}
 
x
2
=
{
3
4
0
}
 
y
2
=
{
6
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
N
E
U
T
R
A
L
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
2
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
 
4
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
c
b
-
a
r
r
o
w
)
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
{
4
0
0
}
 
y
1
=
{
6
0
}
 
x
2
=
{
6
2
0
}
 
y
2
=
{
6
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
N
E
U
T
R
A
L
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
2
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
 
4
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
c
b
-
a
r
r
o
w
)
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
 
6
2
0
 
9
0
 
Q
 
3
6
0
 
1
6
0
 
1
2
0
 
9
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
N
E
U
T
R
A
L
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
2
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
 
4
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
c
b
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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
c
b
-
a
r
r
o
w
"
 
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
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
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
6
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
6
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
-
s
t
a
r
t
-
r
e
v
e
r
s
e
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
 
0
 
L
 
1
0
 
5
 
L
 
0
 
1
0
 
z
"
 
f
i
l
l
=
{
N
E
U
T
R
A
L
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
/
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
2
2
0
}
 
y
=
{
5
0
}
 
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
i
l
l
=
{
N
E
U
T
R
A
L
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
{
1
0
}
 
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
>
{
F
A
I
L
_
T
H
R
E
S
H
O
L
D
}
 
f
a
i
l
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
{
5
0
0
}
 
y
=
{
5
0
}
 
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
i
l
l
=
{
N
E
U
T
R
A
L
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
{
1
0
}
 
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
>
c
o
o
l
d
o
w
n
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
{
3
7
0
}
 
y
=
{
1
7
2
}
 
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
i
l
l
=
{
N
E
U
T
R
A
L
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
{
1
0
}
 
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
>
p
r
o
b
e
 
o
k
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
b
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
3
 
g
a
p
-
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
s
t
a
t
e
"
 
t
e
x
t
V
a
l
u
e
=
{
s
t
a
t
e
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
 
c
o
l
o
r
=
{
s
t
a
t
e
C
o
l
o
r
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
f
a
i
l
 
c
o
u
n
t
"
 
t
e
x
t
V
a
l
u
e
=
{
`
$
{
r
e
c
e
n
t
F
a
i
l
s
}
 
/
 
$
{
F
A
I
L
_
T
H
R
E
S
H
O
L
D
}
`
}
 
c
o
l
o
r
=
{
r
e
c
e
n
t
F
a
i
l
s
 
>
=
 
F
A
I
L
_
T
H
R
E
S
H
O
L
D
 
-
 
1
 
?
 
W
A
R
N
 
:
 
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
c
a
l
l
s
 
s
e
e
n
"
 
t
e
x
t
V
a
l
u
e
=
{
S
t
r
i
n
g
(
c
a
l
l
s
.
l
e
n
g
t
h
)
}
 
c
o
l
o
r
=
{
S
D
}
 
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
 
R
e
c
e
n
t
 
c
a
l
l
s
 
s
t
r
i
p
 
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
f
l
e
x
"
,
 
g
a
p
:
 
4
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
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
 
1
4
 
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
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
l
l
s
.
m
a
p
(
(
c
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
c
 
=
 
c
.
r
e
s
u
l
t
 
=
=
=
 
"
o
k
"
 
?
 
S
D
 
:
 
c
.
r
e
s
u
l
t
 
=
=
=
 
"
f
a
s
t
-
f
a
i
l
"
 
?
 
P
U
R
P
L
E
 
:
 
W
A
R
N
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
c
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
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
4
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
 
c
c
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
c
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
c
c
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
r
e
s
u
l
t
 
=
=
=
 
"
o
k
"
 
?
 
"
✓
"
 
:
 
c
.
r
e
s
u
l
t
 
=
=
=
 
"
f
a
s
t
-
f
a
i
l
"
 
?
 
"
⚡
"
 
:
 
"
✕
"
}
 
#
{
c
.
i
d
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
 
"
r
e
s
u
m
e
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
s
t
a
t
e
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
6
 
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
3
 
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
4
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
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
 
6
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
#
e
5
e
7
e
b
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
 
s
t
a
t
e
C
o
l
o
r
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
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
U
R
R
E
N
T


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
e
 
=
=
=
 
"
c
l
o
s
e
d
"
 
&
&
 
"
N
o
r
m
a
l
 
o
p
e
r
a
t
i
o
n
.
 
F
a
i
l
u
r
e
s
 
a
r
e
 
c
o
u
n
t
e
d
;
 
i
f
 
5
 
i
n
 
a
 
r
o
w
,
 
t
h
e
 
b
r
e
a
k
e
r
 
o
p
e
n
s
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
e
 
=
=
=
 
"
o
p
e
n
"
 
&
&
 
"
B
r
e
a
k
e
r
 
t
r
i
p
p
e
d
.
 
C
a
l
l
s
 
f
a
i
l
 
i
n
s
t
a
n
t
l
y
 
w
i
t
h
o
u
t
 
t
o
u
c
h
i
n
g
 
t
h
e
 
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
 
—
 
s
a
v
e
s
 
i
t
 
f
r
o
m
 
a
 
r
e
t
r
y
 
s
t
o
r
m
.
 
C
o
o
l
d
o
w
n
 
i
s
 
4
s
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
e
 
=
=
=
 
"
h
a
l
f
-
o
p
e
n
"
 
&
&
 
"
C
o
o
l
d
o
w
n
 
e
l
a
p
s
e
d
.
 
S
e
n
d
i
n
g
 
p
r
o
b
e
 
r
e
q
u
e
s
t
s
.
 
I
f
 
t
h
e
y
 
s
u
c
c
e
e
d
,
 
c
l
o
s
e
;
 
o
t
h
e
r
w
i
s
e
 
r
e
o
p
e
n
 
f
o
r
 
a
n
o
t
h
e
r
 
4
s
.
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
 
S
t
a
t
(
{
 
l
a
b
e
l
,
 
t
e
x
t
V
a
l
u
e
,
 
c
o
l
o
r
 
}
:
 
{
 
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
 
t
e
x
t
V
a
l
u
e
:
 
s
t
r
i
n
g
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
 
}
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
 
b
o
r
d
e
r
C
o
l
o
r
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
5
5
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
C
o
l
o
r
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
0
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
`
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
 
c
o
l
o
r
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
t
e
x
t
V
a
l
u
e
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
 
4
 
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
t
e
x
t
V
a
l
u
e
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
u
n
i
n
g
 
+
 
r
e
a
l
 
c
o
n
f
i
g
u
r
a
t
i
o
n
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
 
T
U
N
I
N
G
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
F
a
i
l
u
r
e
 
t
h
r
e
s
h
o
l
d
"
,


 
 
 
 
v
:
 
"
H
o
w
 
m
a
n
y
 
f
a
i
l
u
r
e
s
 
(
o
r
 
%
 
f
a
i
l
u
r
e
 
r
a
t
e
)
 
o
v
e
r
 
h
o
w
 
b
i
g
 
a
 
w
i
n
d
o
w
 
b
e
f
o
r
e
 
o
p
e
n
i
n
g
.
 
T
o
o
 
l
o
w
 
→
 
f
a
l
s
e
 
t
r
i
p
s
 
o
n
 
a
 
b
l
i
p
.
 
T
o
o
 
h
i
g
h
 
→
 
t
o
o
 
s
l
o
w
 
t
o
 
p
r
o
t
e
c
t
.
"
,


 
 
 
 
t
y
p
i
c
a
l
:
 
"
5
 
c
o
n
s
e
c
u
t
i
v
e
 
f
a
i
l
u
r
e
s
,
 
o
r
 
5
0
%
 
o
v
e
r
 
2
0
 
c
a
l
l
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
C
o
o
l
d
o
w
n
 
/
 
s
l
e
e
p
 
w
i
n
d
o
w
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
 
t
h
e
 
b
r
e
a
k
e
r
 
s
t
a
y
s
 
o
p
e
n
 
b
e
f
o
r
e
 
p
r
o
b
i
n
g
.
 
L
o
n
g
 
e
n
o
u
g
h
 
f
o
r
 
t
h
e
 
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
 
t
o
 
r
e
c
o
v
e
r
;
 
s
h
o
r
t
 
e
n
o
u
g
h
 
t
o
 
r
e
t
r
y
 
q
u
i
c
k
l
y
.
"
,


 
 
 
 
t
y
p
i
c
a
l
:
 
"
5
-
3
0
s
 
d
e
p
e
n
d
i
n
g
 
o
n
 
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
 
r
e
c
o
v
e
r
y
 
t
i
m
e
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
P
r
o
b
e
 
c
o
u
n
t
"
,


 
 
 
 
v
:
 
"
H
o
w
 
m
a
n
y
 
r
e
q
u
e
s
t
s
 
a
r
e
 
a
l
l
o
w
e
d
 
i
n
 
h
a
l
f
-
o
p
e
n
.
 
U
s
u
a
l
l
y
 
1
-
3
.
"
,


 
 
 
 
t
y
p
i
c
a
l
:
 
"
1
 
p
r
o
b
e
;
 
s
u
c
c
e
e
d
 
→
 
c
l
o
s
e
,
 
f
a
i
l
 
→
 
r
e
o
p
e
n
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
P
e
r
-
h
o
s
t
 
v
s
 
g
l
o
b
a
l
"
,


 
 
 
 
v
:
 
"
T
r
a
c
k
 
f
a
i
l
u
r
e
s
 
p
e
r
 
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
 
h
o
s
t
 
(
s
o
 
o
n
e
 
b
a
d
 
n
o
d
e
 
d
o
e
s
n
'
t
 
o
p
e
n
 
t
h
e
 
b
r
e
a
k
e
r
 
f
o
r
 
t
h
e
 
w
h
o
l
e
 
f
l
e
e
t
)
 
o
r
 
g
l
o
b
a
l
l
y
 
p
e
r
 
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


 
 
 
 
t
y
p
i
c
a
l
:
 
"
P
e
r
-
h
o
s
t
 
f
o
r
 
u
p
s
t
r
e
a
m
 
p
o
o
l
s
;
 
g
l
o
b
a
l
 
f
o
r
 
e
x
t
e
r
n
a
l
 
A
P
I
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
 
T
u
n
i
n
g
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
u
n
i
n
g
 
t
h
e
 
b
r
e
a
k
e
r
 
f
o
r
 
y
o
u
r
 
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


 
 
 
 
 
 
 
 
T
h
e
 
f
o
u
r
 
k
n
o
b
s
 
t
h
a
t
 
d
e
c
i
d
e
 
h
o
w
 
a
g
g
r
e
s
s
i
v
e
 
y
o
u
r
 
b
r
e
a
k
e
r
 
i
s
.
 
P
i
c
k
 
w
r
o
n
g
 
a
n
d
 
i
t
 
e
i
t
h
e
r
 
f
l
a
p
s


 
 
 
 
 
 
 
 
o
n
 
e
v
e
r
y
 
m
i
n
o
r
 
b
l
i
p
 
o
r
 
f
a
i
l
s
 
t
o
 
p
r
o
t
e
c
t
 
d
u
r
i
n
g
 
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
7
 
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
T
U
N
I
N
G
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
t
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
2
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
 
8
 
}
}
>
{
t
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
t
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
 
c
o
l
o
r
:
 
S
D
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
T
Y
P
I
C
A
L
 
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
t
.
t
y
p
i
c
a
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
C
i
r
c
u
i
t
B
r
e
a
k
e
r
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
d
e
m
o
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
r
i
p
 
t
h
e
 
B
r
e
a
k
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
C
i
r
c
u
i
t
B
r
e
a
k
e
r
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
u
n
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
T
u
n
i
n
g
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
T
u
n
i
n
g
 
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
y
 
d
o
e
s
 
a
n
 
O
P
E
N
 
b
r
e
a
k
e
r
 
f
a
i
l
 
r
e
q
u
e
s
t
s
 
i
n
s
t
a
n
t
l
y
 
i
n
s
t
e
a
d
 
o
f
 
f
o
r
w
a
r
d
i
n
g
 
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
I
t
'
s
 
f
a
s
t
e
r
 
t
o
 
f
a
i
l
.
"
,


 
 
 
 
 
 
 
 
"
F
o
r
w
a
r
d
i
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
o
 
a
 
k
n
o
w
n
-
f
a
i
l
i
n
g
 
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
 
j
u
s
t
 
a
d
d
s
 
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
 
t
h
e
 
c
a
l
l
e
r
 
a
n
d
 
l
o
a
d
 
f
o
r
 
t
h
e
 
d
y
i
n
g
 
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
R
a
n
d
o
m
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
s
a
v
e
 
b
a
n
d
w
i
d
t
h
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
F
a
s
t
-
f
a
i
l
 
p
r
o
t
e
c
t
s
 
b
o
t
h
 
s
i
d
e
s
.
 
T
h
e
 
c
a
l
l
e
r
 
g
e
t
s
 
a
 
q
u
i
c
k
 
e
r
r
o
r
 
a
n
d
 
c
a
n
 
f
a
l
l
 
b
a
c
k
;
 
t
h
e
 
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
 
g
e
t
s
 
a
 
c
h
a
n
c
e
 
t
o
 
r
e
c
o
v
e
r
 
w
i
t
h
o
u
t
 
a
 
t
h
u
n
d
e
r
i
n
g
 
h
e
r
d
 
o
f
 
r
e
t
r
i
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
W
h
a
t
'
s
 
t
h
e
 
p
u
r
p
o
s
e
 
o
f
 
H
A
L
F
-
O
P
E
N
 
s
t
a
t
e
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
A
 
c
o
n
t
r
o
l
l
e
d
 
p
r
o
b
e
 
—
 
l
e
t
 
o
n
e
 
(
o
r
 
a
 
f
e
w
)
 
r
e
q
u
e
s
t
s
 
t
h
r
o
u
g
h
 
t
o
 
t
e
s
t
 
i
f
 
t
h
e
 
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
 
h
a
s
 
r
e
c
o
v
e
r
e
d
,
 
b
e
f
o
r
e
 
f
u
l
l
y
 
c
l
o
s
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
T
o
 
s
l
o
w
 
t
r
a
f
f
i
c
.
"
,


 
 
 
 
 
 
 
 
"
R
e
p
l
a
c
e
 
l
o
g
s
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
 
t
h
e
 
b
r
e
a
k
e
r
 
w
e
n
t
 
s
t
r
a
i
g
h
t
 
f
r
o
m
 
o
p
e
n
 
→
 
c
l
o
s
e
d
,
 
t
h
e
 
m
o
m
e
n
t
 
c
o
o
l
d
o
w
n
 
e
n
d
s
 
a
 
f
l
o
o
d
 
o
f
 
h
e
l
d
-
u
p
 
t
r
a
f
f
i
c
 
w
o
u
l
d
 
s
l
a
m
 
t
h
e
 
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
.
 
H
a
l
f
-
o
p
e
n
 
d
o
e
s
 
a
 
c
o
n
t
r
o
l
l
e
d
 
p
r
o
b
e
 
i
n
s
t
e
a
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
C
o
o
l
d
o
w
n
 
i
s
 
6
0
s
.
 
F
a
i
l
u
r
e
 
t
h
r
e
s
h
o
l
d
 
i
s
 
5
0
%
 
o
v
e
r
 
1
0
0
 
c
a
l
l
s
.
 
D
o
w
n
s
t
r
e
a
m
 
r
e
c
o
v
e
r
s
 
i
n
 
5
s
.
 
W
h
a
t
'
s
 
t
h
e
 
s
y
m
p
t
o
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
B
r
e
a
k
e
r
 
b
e
h
a
v
e
s
 
p
e
r
f
e
c
t
l
y
.
"
,


 
 
 
 
 
 
 
 
"
B
r
e
a
k
e
r
 
s
t
a
y
s
 
o
p
e
n
 
w
a
y
 
l
o
n
g
e
r
 
t
h
a
n
 
n
e
c
e
s
s
a
r
y
;
 
u
s
e
r
s
 
s
e
e
 
e
r
r
o
r
s
 
f
o
r
 
5
5
 
u
n
n
e
c
e
s
s
a
r
y
 
s
e
c
o
n
d
s
.
"
,


 
 
 
 
 
 
 
 
"
F
a
s
t
e
r
 
r
e
c
o
v
e
r
y
.
"
,


 
 
 
 
 
 
 
 
"
M
e
m
o
r
y
 
l
e
a
k
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
C
o
o
l
d
o
w
n
 
s
h
o
u
l
d
 
m
a
t
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
 
r
e
c
o
v
e
r
y
 
t
i
m
e
.
 
T
o
o
 
l
o
n
g
 
m
e
a
n
s
 
t
h
e
 
b
r
e
a
k
e
r
 
i
s
 
o
v
e
r
l
y
 
c
o
n
s
e
r
v
a
t
i
v
e
;
 
t
o
o
 
s
h
o
r
t
 
a
n
d
 
i
t
 
f
l
a
p
s
.
 
P
r
o
d
u
c
t
i
o
n
 
d
e
f
a
u
l
t
 
i
s
 
5
-
3
0
s
 
w
i
t
h
 
a
d
a
p
t
i
v
e
 
t
u
n
i
n
g
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
i
t
h
o
u
t
 
a
 
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
,
 
w
h
a
t
'
s
 
t
h
e
 
c
l
a
s
s
i
c
 
c
a
s
c
a
d
e
 
f
a
i
l
u
r
e
 
p
a
t
t
e
r
n
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
a
t
a
b
a
s
e
 
s
t
o
p
s
.
"
,


 
 
 
 
 
 
 
 
"
D
o
w
n
s
t
r
e
a
m
 
s
l
o
w
s
 
→
 
c
a
l
l
e
r
'
s
 
t
h
r
e
a
d
s
 
b
l
o
c
k
 
w
a
i
t
i
n
g
 
→
 
c
a
l
l
e
r
'
s
 
t
h
r
e
a
d
 
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
s
 
→
 
c
a
l
l
e
r
 
s
t
a
r
t
s
 
f
a
i
l
i
n
g
 
a
l
l
 
r
e
q
u
e
s
t
s
 
→
 
f
a
i
l
u
r
e
 
c
a
s
c
a
d
e
s
 
u
p
s
t
r
e
a
m
.
"
,


 
 
 
 
 
 
 
 
"
S
e
r
v
e
r
s
 
r
e
b
o
o
t
.
"
,


 
 
 
 
 
 
 
 
"
D
N
S
 
d
i
e
s
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
T
h
e
 
c
l
a
s
s
i
c
 
'
o
n
e
 
s
l
o
w
 
d
e
p
e
n
d
e
n
c
y
 
t
a
k
e
s
 
d
o
w
n
 
t
h
e
 
w
h
o
l
e
 
s
y
s
t
e
m
'
.
 
T
h
e
 
s
l
o
w
 
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
 
h
o
l
d
s
 
t
h
r
e
a
d
s
;
 
t
h
e
 
t
h
r
e
a
d
 
p
o
o
l
 
f
i
l
l
s
;
 
h
e
a
l
t
h
y
 
t
r
a
f
f
i
c
 
n
o
w
 
a
l
s
o
 
f
a
i
l
s
 
b
e
c
a
u
s
e
 
t
h
e
r
e
 
a
r
e
 
n
o
 
t
h
r
e
a
d
s
.
 
C
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
 
o
p
e
n
s
 
b
e
f
o
r
e
 
t
h
r
e
a
d
s
 
e
x
h
a
u
s
t
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
C
i
r
c
u
i
t
 
B
r
e
a
k
e
r
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
1
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
 
f
i
r
s
t
 
a
n
s
w
e
r
 
i
n
 
a
n
y
 
'
h
o
w
 
d
o
 
y
o
u
 
h
a
n
d
l
e
 
a
 
f
a
i
l
i
n
g
 
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
'
 
q
u
e
s
t
i
o
n
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




