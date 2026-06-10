
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
i
t
B
r
a
n
c
h
,
 
N
e
t
w
o
r
k
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
O
n
e
 
b
u
s
i
n
e
s
s
 
a
c
t
i
o
n
.
 
M
a
n
y
 
s
e
r
v
i
c
e
s
.
 
H
o
w
 
d
o
 
y
o
u
 
k
e
e
p
 
i
t
 
a
t
o
m
i
c
?
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


 
 
 
 
 
 
 
 
B
o
o
k
i
n
g
 
a
 
f
l
i
g
h
t
 
+
 
h
o
t
e
l
 
t
o
u
c
h
e
s
 
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
.
 
C
h
a
r
g
i
n
g
 
a
 
c
a
r
d
 
+
 
r
e
s
e
r
v
i
n
g
 
i
n
v
e
n
t
o
r
y


 
 
 
 
 
 
 
 
t
o
u
c
h
e
s
 
t
w
o
 
d
a
t
a
b
a
s
e
s
.
 
E
i
t
h
e
r
 
b
o
t
h
 
s
u
c
c
e
e
d
 
o
r
 
b
o
t
h
 
u
n
d
o
 
—
 
t
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
 
a
 
<
b
>
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


 
 
 
 
 
 
 
 
t
r
a
n
s
a
c
t
i
o
n
<
/
b
>
.
 
T
w
o
 
p
a
t
t
e
r
n
s
 
d
o
m
i
n
a
t
e
:
 
<
b
>
T
w
o
-
P
h
a
s
e
 
C
o
m
m
i
t
 
(
2
P
C
)
<
/
b
>
 
a
n
d
 
<
b
>
S
a
g
a
s
<
/
b
>
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
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
T
w
o
-
P
h
a
s
e
 
C
o
m
m
i
t
 
(
2
P
C
)
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


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
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
 
·
 
b
l
o
c
k
i
n
g
 
·
 
s
t
r
o
n
g
"
,


 
 
 
 
 
 
 
 
 
 
 
 
h
o
w
:
 
"
A
 
c
o
o
r
d
i
n
a
t
o
r
 
a
s
k
s
 
e
v
e
r
y
 
p
a
r
t
i
c
i
p
a
n
t
 
'
c
a
n
 
y
o
u
 
c
o
m
m
i
t
?
'
 
(
p
r
e
p
a
r
e
)
.
 
I
f
 
e
v
e
r
y
o
n
e
 
s
a
y
s
 
y
e
s
,
 
i
t
 
t
e
l
l
s
 
e
v
e
r
y
o
n
e
 
t
o
 
c
o
m
m
i
t
.
 
I
f
 
a
n
y
o
n
e
 
s
a
y
s
 
n
o
,
 
e
v
e
r
y
o
n
e
 
a
b
o
r
t
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
:
 
"
A
t
o
m
i
c
 
a
c
r
o
s
s
 
a
l
l
 
p
a
r
t
i
c
i
p
a
n
t
s
.
 
H
a
r
d
 
t
o
 
g
e
t
 
w
r
o
n
g
 
f
r
o
m
 
t
h
e
 
a
p
p
'
s
 
v
i
e
w
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
:
 
"
B
l
o
c
k
s
 
u
n
t
i
l
 
e
v
e
r
y
 
p
a
r
t
i
c
i
p
a
n
t
 
r
e
s
p
o
n
d
s
.
 
I
f
 
t
h
e
 
c
o
o
r
d
i
n
a
t
o
r
 
d
i
e
s
 
a
f
t
e
r
 
p
r
e
p
a
r
e
,
 
p
a
r
t
i
c
i
p
a
n
t
s
 
a
r
e
 
s
t
u
c
k
 
h
o
l
d
i
n
g
 
l
o
c
k
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
P
o
s
t
g
r
e
s
 
p
r
e
p
a
r
e
d
 
t
r
a
n
s
a
c
t
i
o
n
s
.
 
X
A
 
a
c
r
o
s
s
 
m
u
l
t
i
p
l
e
 
J
D
B
C
 
d
a
t
a
b
a
s
e
s
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
S
a
g
a
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


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
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
 
·
 
n
o
n
-
b
l
o
c
k
i
n
g
 
·
 
e
v
e
n
t
u
a
l
l
y
 
c
o
n
s
i
s
t
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
h
o
w
:
 
"
R
u
n
 
e
a
c
h
 
s
t
e
p
 
i
n
d
e
p
e
n
d
e
n
t
l
y
.
 
I
f
 
a
 
s
t
e
p
 
f
a
i
l
s
,
 
r
u
n
 
a
 
c
o
m
p
e
n
s
a
t
i
n
g
 
a
c
t
i
o
n
 
f
o
r
 
e
v
e
r
y
 
p
r
e
v
i
o
u
s
 
s
t
e
p
 
(
r
e
f
u
n
d
,
 
r
e
l
e
a
s
e
 
i
n
v
e
n
t
o
r
y
,
 
c
a
n
c
e
l
 
b
o
o
k
i
n
g
)
.
 
N
o
 
g
l
o
b
a
l
 
l
o
c
k
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
:
 
"
N
o
 
b
l
o
c
k
i
n
g
,
 
s
c
a
l
e
s
 
h
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
.
 
S
u
r
v
i
v
e
s
 
l
o
n
g
-
r
u
n
n
i
n
g
 
f
l
o
w
s
 
(
h
o
u
r
s
,
 
d
a
y
s
)
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
:
 
"
E
a
c
h
 
s
t
e
p
 
m
u
s
t
 
b
e
 
i
d
e
m
p
o
t
e
n
t
 
a
n
d
 
h
a
v
e
 
a
 
c
o
m
p
e
n
s
a
t
i
n
g
 
a
c
t
i
o
n
.
 
A
p
p
 
d
e
v
e
l
o
p
e
r
 
h
o
l
d
s
 
t
h
e
 
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
 
c
o
n
t
r
a
c
t
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
U
b
e
r
 
t
r
i
p
 
l
i
f
e
c
y
c
l
e
,
 
e
-
c
o
m
m
e
r
c
e
 
c
h
e
c
k
o
u
t
,
 
A
W
S
 
S
t
e
p
 
F
u
n
c
t
i
o
n
s
,
 
T
e
m
p
o
r
a
l
 
w
o
r
k
f
l
o
w
s
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
p
,
 
i
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
n
a
m
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
 
1
2
 
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
5
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
1
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
n
a
m
e
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
6
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
a
g
l
i
n
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
6
 
}
}
>
{
p
.
h
o
w
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
T
o
p
:
 
2
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
 
}
}
>
P
R
O
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
5
5
 
}
}
>
{
p
.
p
r
o
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
 
W
A
R
N
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
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
 
}
}
>
C
O
N
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
5
5
 
}
}
>
{
p
.
c
o
n
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
 
2
P
C
 
a
n
i
m
a
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




t
y
p
e
 
T
w
o
P
C
S
t
a
g
e
 
=
 
"
i
d
l
e
"
 
|
 
"
p
r
e
p
a
r
e
"
 
|
 
"
v
o
t
e
d
"
 
|
 
"
c
o
m
m
i
t
"
 
|
 
"
c
o
m
m
i
t
t
e
d
"
 
|
 
"
a
b
o
r
t
e
d
"
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
w
o
P
C
A
n
i
m
a
t
i
o
n
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
g
e
,
 
s
e
t
S
t
a
g
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
T
w
o
P
C
S
t
a
g
e
>
(
"
i
d
l
e
"
)
;


 
 
c
o
n
s
t
 
[
f
a
i
l
N
o
d
e
,
 
s
e
t
F
a
i
l
N
o
d
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


 
 
c
o
n
s
t
 
[
p
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
,
 
s
e
t
P
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
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
b
o
o
l
e
a
n
[
]
>
(
[
f
a
l
s
e
,
 
f
a
l
s
e
,
 
f
a
l
s
e
]
)
;




 
 
c
o
n
s
t
 
s
t
a
r
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
g
e
(
"
p
r
e
p
a
r
e
"
)
;


 
 
 
 
s
e
t
P
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
(
[
f
a
l
s
e
,
 
f
a
l
s
e
,
 
f
a
l
s
e
]
)
;


 
 
}
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
s
t
a
g
e
 
=
=
=
 
"
p
r
e
p
a
r
e
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
T
i
m
e
o
u
t
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
 
r
e
a
d
y
 
=
 
[
t
r
u
e
,
 
t
r
u
e
,
 
t
r
u
e
]
;


 
 
 
 
 
 
 
 
i
f
 
(
f
a
i
l
N
o
d
e
 
!
=
=
 
n
u
l
l
)
 
r
e
a
d
y
[
f
a
i
l
N
o
d
e
]
 
=
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
s
e
t
P
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
(
r
e
a
d
y
)
;


 
 
 
 
 
 
 
 
s
e
t
S
t
a
g
e
(
"
v
o
t
e
d
"
)
;


 
 
 
 
 
 
}
,
 
1
1
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
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
v
o
t
e
d
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
l
l
R
e
a
d
y
 
=
 
p
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
.
e
v
e
r
y
(
B
o
o
l
e
a
n
)
;


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
S
t
a
g
e
(
a
l
l
R
e
a
d
y
 
?
 
"
c
o
m
m
i
t
"
 
:
 
"
a
b
o
r
t
e
d
"
)
,
 
9
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
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
S
t
a
g
e
(
"
c
o
m
m
i
t
t
e
d
"
)
,
 
1
0
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
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
 
 
}


 
 
}
,
 
[
s
t
a
g
e
,
 
f
a
i
l
N
o
d
e
,
 
p
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
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
g
e
(
"
i
d
l
e
"
)
;


 
 
 
 
s
e
t
F
a
i
l
N
o
d
e
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
P
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
(
[
f
a
l
s
e
,
 
f
a
l
s
e
,
 
f
a
l
s
e
]
)
;


 
 
}
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
2
P
C
:
 
p
r
e
p
a
r
e
,
 
t
h
e
n
 
c
o
m
m
i
t
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
o
o
r
d
i
n
a
t
o
r
 
a
s
k
s
 
a
l
l
 
3
 
p
a
r
t
i
c
i
p
a
n
t
s
 
&
l
d
q
u
o
;
c
a
n
 
y
o
u
 
c
o
m
m
i
t
?
&
r
d
q
u
o
;
 
(
p
h
a
s
e
 
1
)
.
 
I
f
 
e
v
e
r
y
o
n
e
 
s
a
y
s
 
y
e
s
,


 
 
 
 
 
 
 
 
i
t
 
t
e
l
l
s
 
t
h
e
m
 
a
l
l
 
t
o
 
c
o
m
m
i
t
 
(
p
h
a
s
e
 
2
)
.
 
I
f
 
a
n
y
o
n
e
 
r
e
f
u
s
e
s
 
o
r
 
f
a
i
l
s
,
 
e
v
e
r
y
o
n
e
 
a
b
o
r
t
s
.
 
T
o
g
g
l
e


 
 
 
 
 
 
 
 
t
h
e
 
&
l
d
q
u
o
;
f
a
i
l
 
n
o
d
e
&
r
d
q
u
o
;
 
t
o
 
i
n
j
e
c
t
 
a
 
f
a
i
l
u
r
e
 
d
u
r
i
n
g
 
p
r
e
p
a
r
e
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
 
7
2
0
 
2
8
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
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
c
o
o
r
d
i
n
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x
 
x
=
{
3
1
0
}
 
y
=
{
2
0
}
 
w
=
{
1
0
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
"
C
o
o
r
d
i
n
a
t
o
r
"
 
s
u
b
=
{
s
t
a
g
e
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
 
p
u
l
s
e
=
{
s
t
a
g
e
 
!
=
=
 
"
i
d
l
e
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
c
o
m
m
i
t
t
e
d
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
a
b
o
r
t
e
d
"
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
p
a
r
t
i
c
i
p
a
n
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
]
.
m
a
p
(
(
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
 
1
0
0
 
+
 
i
 
*
 
2
2
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
8
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
a
d
y
 
=
 
p
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
[
i
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
a
i
l
i
n
g
 
=
 
f
a
i
l
N
o
d
e
 
=
=
=
 
i
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
i
d
l
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
n
o
d
e
C
o
l
o
r
 
=
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
v
o
t
e
d
"
 
|
|
 
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
"
 
|
|
 
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
t
e
d
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
C
o
l
o
r
 
=
 
r
e
a
d
y
 
?
 
S
D
 
:
 
W
A
R
N
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
a
b
o
r
t
e
d
"
 
&
&
 
!
r
e
a
d
y
)
 
n
o
d
e
C
o
l
o
r
 
=
 
W
A
R
N
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
t
e
d
"
 
&
&
 
r
e
a
d
y
)
 
n
o
d
e
C
o
l
o
r
 
=
 
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
g
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
 
c
o
o
r
d
i
n
a
t
o
r
 
-
>
 
p
a
r
t
i
c
i
p
a
n
t
 
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
3
6
0
}
 
y
1
=
{
7
0
}
 
x
2
=
{
x
 
+
 
5
0
}
 
y
2
=
{
1
8
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
#
4
7
5
5
6
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
{
1
.
5
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
 
/
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
p
r
e
p
a
r
e
 
a
r
r
o
w
 
/
 
v
o
t
e
 
a
r
r
o
w
 
/
 
c
o
m
m
i
t
 
a
r
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
p
r
e
p
a
r
e
"
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
3
6
0
,
 
c
y
:
 
7
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
 
c
x
:
 
x
 
+
 
5
0
,
 
c
y
:
 
1
8
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
7
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
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
v
o
t
e
d
"
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
r
e
a
d
y
 
?
 
S
D
 
:
 
W
A
R
N
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
 
c
x
:
 
x
 
+
 
5
0
,
 
c
y
:
 
1
8
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
 
c
x
:
 
3
6
0
,
 
c
y
:
 
7
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
7
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
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
"
 
|
|
 
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
t
e
d
"
)
 
&
&
 
p
a
r
t
i
c
i
p
a
n
t
s
R
e
a
d
y
.
e
v
e
r
y
(
B
o
o
l
e
a
n
)
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
3
6
0
,
 
c
y
:
 
7
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
 
c
x
:
 
x
 
+
 
5
0
,
 
c
y
:
 
1
8
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
7
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
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
a
b
o
r
t
e
d
"
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
W
A
R
N
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
 
c
x
:
 
3
6
0
,
 
c
y
:
 
7
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
 
c
x
:
 
x
 
+
 
5
0
,
 
c
y
:
 
1
8
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
7
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
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
B
o
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
=
{
1
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
=
{
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
{
`
P
a
r
t
i
c
i
p
a
n
t
 
$
{
i
 
+
 
1
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
g
e
 
=
=
=
 
"
i
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
e
a
d
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
t
a
g
e
 
=
=
=
 
"
p
r
e
p
a
r
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
r
e
c
e
i
v
e
d
…
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
F
a
i
l
i
n
g
 
&
&
 
(
s
t
a
g
e
 
=
=
=
 
"
v
o
t
e
d
"
 
|
|
 
s
t
a
g
e
 
=
=
=
 
"
a
b
o
r
t
e
d
"
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
✕
 
r
e
f
u
s
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
e
a
d
y
 
&
&
 
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
✓
 
c
o
m
m
i
t
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
e
a
d
y
 
&
&
 
s
t
a
g
e
 
=
=
=
 
"
v
o
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
v
o
t
e
d
 
y
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
r
e
a
d
y
 
&
&
 
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
c
o
m
m
i
t
t
i
n
g
…
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
t
a
g
e
 
=
=
=
 
"
a
b
o
r
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
a
b
o
r
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
…
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
i
s
F
a
i
l
i
n
g
 
?
 
W
A
R
N
 
:
 
n
o
d
e
C
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
r
a
s
h
e
d
=
{
i
s
F
a
i
l
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
 
 
<
/
s
v
g
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
g
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
 
5
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
T
A
G
E


 
 
 
 
 
 
 
 
 
 
 
 
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
g
e
 
=
=
=
 
"
i
d
l
e
"
 
&
&
 
"
P
i
c
k
 
w
h
e
t
h
e
r
 
t
o
 
i
n
j
e
c
t
 
a
 
f
a
i
l
u
r
e
,
 
t
h
e
n
 
s
t
a
r
t
 
t
h
e
 
t
r
a
n
s
a
c
t
i
o
n
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
p
r
e
p
a
r
e
"
 
&
&
 
"
P
h
a
s
e
 
1
 
(
P
R
E
P
A
R
E
)
:
 
c
o
o
r
d
i
n
a
t
o
r
 
a
s
k
s
 
e
v
e
r
y
 
p
a
r
t
i
c
i
p
a
n
t
 
i
f
 
t
h
e
y
 
c
a
n
 
c
o
m
m
i
t
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
v
o
t
e
d
"
 
&
&
 
(
f
a
i
l
N
o
d
e
 
!
=
=
 
n
u
l
l
 
?
 
`
P
a
r
t
i
c
i
p
a
n
t
 
$
{
f
a
i
l
N
o
d
e
 
+
 
1
}
 
r
e
f
u
s
e
d
.
 
C
o
o
r
d
i
n
a
t
o
r
 
w
i
l
l
 
t
e
l
l
 
e
v
e
r
y
o
n
e
 
t
o
 
a
b
o
r
t
.
`
 
:
 
"
A
l
l
 
v
o
t
e
d
 
y
e
s
.
 
C
o
o
r
d
i
n
a
t
o
r
 
w
i
l
l
 
b
r
o
a
d
c
a
s
t
 
C
O
M
M
I
T
.
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
"
 
&
&
 
"
P
h
a
s
e
 
2
 
(
C
O
M
M
I
T
)
:
 
c
o
o
r
d
i
n
a
t
o
r
 
b
r
o
a
d
c
a
s
t
s
 
c
o
m
m
i
t
.
 
P
a
r
t
i
c
i
p
a
n
t
s
 
a
p
p
l
y
 
a
n
d
 
r
e
l
e
a
s
e
 
l
o
c
k
s
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
c
o
m
m
i
t
t
e
d
"
 
&
&
 
"
✓
 
A
l
l
 
p
a
r
t
i
c
i
p
a
n
t
s
 
c
o
m
m
i
t
t
e
d
.
 
T
r
a
n
s
a
c
t
i
o
n
 
d
u
r
a
b
l
e
 
a
c
r
o
s
s
 
t
h
e
 
s
y
s
t
e
m
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
 
=
=
=
 
"
a
b
o
r
t
e
d
"
 
&
&
 
"
✕
 
O
n
e
 
p
a
r
t
i
c
i
p
a
n
t
 
r
e
f
u
s
e
d
.
 
C
o
o
r
d
i
n
a
t
o
r
 
b
r
o
a
d
c
a
s
t
s
 
A
B
O
R
T
.
 
E
v
e
r
y
o
n
e
 
r
o
l
l
s
 
b
a
c
k
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
s
t
a
r
t
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
a
g
e
 
!
=
=
 
"
i
d
l
e
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
c
o
m
m
i
t
t
e
d
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
a
b
o
r
t
e
d
"
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
,
 
s
t
a
g
e
 
!
=
=
 
"
i
d
l
e
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
c
o
m
m
i
t
t
e
d
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
a
b
o
r
t
e
d
"
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
 
t
x
n


 
 
 
 
 
 
 
 
 
 
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
 
4
 
}
}
>
f
a
i
l
 
n
o
d
e
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
[
n
u
l
l
,
 
0
,
 
1
,
 
2
]
.
m
a
p
(
(
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
 
a
c
t
i
v
e
 
=
 
f
a
i
l
N
o
d
e
 
=
=
=
 
i
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
i
 
?
?
 
"
n
o
n
e
"
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
F
a
i
l
N
o
d
e
(
i
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
t
a
g
e
 
!
=
=
 
"
i
d
l
e
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
c
o
m
m
i
t
t
e
d
"
 
&
&
 
s
t
a
g
e
 
!
=
=
 
"
a
b
o
r
t
e
d
"
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
5
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
 
W
A
R
N
 
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
3
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
W
A
R
N
}
2
2
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
 
W
A
R
N
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
=
=
=
 
n
u
l
l
 
?
 
"
n
o
n
e
"
 
:
 
`
P
$
{
i
 
+
 
1
}
`
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
l
e
x
:
 
1
 
}
}
 
/
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
,
 
f
a
l
s
e
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
 
N
o
d
e
B
o
x
(
{
 
x
,
 
y
,
 
w
,
 
h
,
 
l
a
b
e
l
,
 
s
u
b
,
 
c
o
l
o
r
,
 
p
u
l
s
e
,
 
c
r
a
s
h
e
d
 
}
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
h
:
 
n
u
m
b
e
r
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
 
s
u
b
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
;
 
p
u
l
s
e
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
 
c
r
a
s
h
e
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
g
 
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
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
p
u
l
s
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
h
}


 
 
 
 
 
 
 
 
 
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
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
2
5
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
1
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
r
e
c
t
 
w
i
d
t
h
=
{
w
}
 
h
e
i
g
h
t
=
{
h
}
 
r
x
=
{
8
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
c
o
l
o
r
}
2
2
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
c
o
l
o
r
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
{
c
r
a
s
h
e
d
 
?
 
"
5
 
4
"
 
:
 
"
0
"
}
 
o
p
a
c
i
t
y
=
{
c
r
a
s
h
e
d
 
?
 
0
.
6
 
:
 
1
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
w
 
/
 
2
}
 
y
=
{
2
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
"
#
e
5
e
7
e
b
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
{
1
1
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
7
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
w
 
/
 
2
}
 
y
=
{
3
6
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
o
l
o
r
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
.
5
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
u
b
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
,
 
d
i
s
a
b
l
e
d
:
 
b
o
o
l
e
a
n
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
 
d
i
s
a
b
l
e
d
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
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
d
i
s
a
b
l
e
d
 
?
 
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
 
:
 
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
 
d
i
s
a
b
l
e
d
 
?
 
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
:
 
d
i
s
a
b
l
e
d
 
?
 
N
E
U
T
R
A
L
 
:
 
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


 
 
 
 
o
p
a
c
i
t
y
:
 
d
i
s
a
b
l
e
d
 
?
 
0
.
5
 
:
 
1
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
 
S
a
g
a
 
a
n
i
m
a
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
a
g
a
S
t
e
p
 
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


 
 
c
o
m
p
e
n
s
a
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


}




c
o
n
s
t
 
S
T
E
P
S
:
 
S
a
g
a
S
t
e
p
[
]
 
=
 
[


 
 
{
 
l
a
b
e
l
:
 
"
R
e
s
e
r
v
e
 
f
l
i
g
h
t
"
,
 
c
o
m
p
e
n
s
a
t
e
:
 
"
C
a
n
c
e
l
 
f
l
i
g
h
t
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
R
e
s
e
r
v
e
 
h
o
t
e
l
"
,
 
c
o
m
p
e
n
s
a
t
e
:
 
"
C
a
n
c
e
l
 
h
o
t
e
l
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
C
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
 
c
o
m
p
e
n
s
a
t
e
:
 
"
R
e
f
u
n
d
 
c
a
r
d
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
I
s
s
u
e
 
t
i
c
k
e
t
"
,
 
c
o
m
p
e
n
s
a
t
e
:
 
"
(
n
o
 
c
o
m
p
e
n
s
a
t
i
o
n
)
"
 
}
,


]
;




t
y
p
e
 
S
a
g
a
P
h
a
s
e
 
=
 
"
i
d
l
e
"
 
|
 
"
r
u
n
n
i
n
g
"
 
|
 
"
c
o
m
p
e
n
s
a
t
i
n
g
"
 
|
 
"
d
o
n
e
"
 
|
 
"
r
o
l
l
e
d
-
b
a
c
k
"
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
a
g
a
A
n
i
m
a
t
i
o
n
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
h
a
s
e
,
 
s
e
t
P
h
a
s
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
S
a
g
a
P
h
a
s
e
>
(
"
i
d
l
e
"
)
;


 
 
c
o
n
s
t
 
[
p
r
o
g
r
e
s
s
,
 
s
e
t
P
r
o
g
r
e
s
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
-
1
)
;


 
 
c
o
n
s
t
 
[
f
a
i
l
A
t
,
 
s
e
t
F
a
i
l
A
t
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
2
)
;


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
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
p
l
a
y
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


 
 
 
 
i
f
 
(
p
h
a
s
e
 
=
=
=
 
"
r
u
n
n
i
n
g
"
)
 
{


 
 
 
 
 
 
i
f
 
(
p
r
o
g
r
e
s
s
 
>
=
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
)
 
{


 
 
 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
d
o
n
e
"
)
;


 
 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
s
e
t
P
l
a
y
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
;


 
 
 
 
 
 
}


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
S
t
e
p
 
=
 
p
r
o
g
r
e
s
s
 
+
 
1
;


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
T
i
m
e
o
u
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
n
e
x
t
S
t
e
p
 
=
=
=
 
f
a
i
l
A
t
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
(
n
e
x
t
S
t
e
p
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
c
o
m
p
e
n
s
a
t
i
n
g
"
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
(
n
e
x
t
S
t
e
p
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
,
 
9
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
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
p
h
a
s
e
 
=
=
=
 
"
c
o
m
p
e
n
s
a
t
i
n
g
"
)
 
{


 
 
 
 
 
 
i
f
 
(
p
r
o
g
r
e
s
s
 
<
 
0
)
 
{


 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
r
o
l
l
e
d
-
b
a
c
k
"
)
;


 
 
 
 
 
 
 
 
s
e
t
P
l
a
y
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
;


 
 
 
 
 
 
}


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
P
r
o
g
r
e
s
s
(
(
p
)
 
=
>
 
p
 
-
 
1
)
,
 
9
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
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
 
 
}


 
 
}
,
 
[
p
h
a
s
e
,
 
p
r
o
g
r
e
s
s
,
 
p
l
a
y
i
n
g
,
 
f
a
i
l
A
t
]
)
;




 
 
c
o
n
s
t
 
s
t
a
r
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
P
r
o
g
r
e
s
s
(
-
1
)
;


 
 
 
 
s
e
t
P
h
a
s
e
(
"
r
u
n
n
i
n
g
"
)
;


 
 
 
 
s
e
t
P
l
a
y
i
n
g
(
t
r
u
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
P
r
o
g
r
e
s
s
(
-
1
)
;


 
 
 
 
s
e
t
P
h
a
s
e
(
"
i
d
l
e
"
)
;


 
 
 
 
s
e
t
P
l
a
y
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
S
a
g
a
:
 
w
a
l
k
 
f
o
r
w
a
r
d
,
 
u
n
d
o
 
o
n
 
f
a
i
l
u
r
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


 
 
 
 
 
 
 
 
E
a
c
h
 
s
t
e
p
 
r
u
n
s
 
i
n
d
e
p
e
n
d
e
n
t
l
y
.
 
I
f
 
a
 
s
t
e
p
 
f
a
i
l
s
,
 
t
h
e
 
s
a
g
a
 
w
a
l
k
s
 
b
a
c
k
 
t
h
r
o
u
g
h
 
t
h
e
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
s
t
e
p
s
 
i
n
 
r
e
v
e
r
s
e
,
 
r
u
n
n
i
n
g
 
e
a
c
h
 
o
n
e
&
r
s
q
u
o
;
s
 
<
b
>
c
o
m
p
e
n
s
a
t
i
n
g
 
a
c
t
i
o
n
<
/
b
>
.
 
T
h
e
r
e
 
i
s
 
n
o
 
g
l
o
b
a
l
 
l
o
c
k


 
 
 
 
 
 
 
 
a
n
d
 
n
o
 
c
o
o
r
d
i
n
a
t
o
r
 
p
h
a
s
e
,
 
s
o
 
t
h
i
s
 
s
c
a
l
e
s
 
t
o
 
l
o
n
g
-
r
u
n
n
i
n
g
,
 
m
u
l
t
i
-
s
e
r
v
i
c
e
 
f
l
o
w
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
f
a
i
l
 
s
t
e
p
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
[
n
u
l
l
,
 
0
,
 
1
,
 
2
,
 
3
]
.
m
a
p
(
(
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
 
a
c
t
i
v
e
 
=
 
f
a
i
l
A
t
 
=
=
=
 
i
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
i
 
?
?
 
"
n
o
n
e
"
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
 
f
a
i
l
A
t
 
!
=
=
 
i
 
&
&
 
s
e
t
F
a
i
l
A
t
(
i
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
p
h
a
s
e
 
!
=
=
 
"
i
d
l
e
"
 
&
&
 
p
h
a
s
e
 
!
=
=
 
"
d
o
n
e
"
 
&
&
 
p
h
a
s
e
 
!
=
=
 
"
r
o
l
l
e
d
-
b
a
c
k
"
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
5
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
 
W
A
R
N
 
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
3
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
W
A
R
N
}
2
2
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
 
W
A
R
N
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
=
=
=
 
n
u
l
l
 
?
 
"
n
o
n
e
"
 
:
 
`
S
$
{
i
 
+
 
1
}
`
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
T
E
P
S
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
 
i
s
C
u
r
r
e
n
t
 
=
 
i
 
=
=
=
 
p
r
o
g
r
e
s
s
 
&
&
 
p
h
a
s
e
 
!
=
=
 
"
i
d
l
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
l
e
t
e
 
=
 
i
 
<
=
 
p
r
o
g
r
e
s
s
 
&
&
 
p
h
a
s
e
 
=
=
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
e
n
s
a
t
e
d
 
=
 
p
h
a
s
e
 
=
=
=
 
"
r
o
l
l
e
d
-
b
a
c
k
"
 
&
&
 
i
 
<
=
 
(
f
a
i
l
A
t
 
?
?
 
-
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
a
i
l
i
n
g
 
=
 
i
 
=
=
=
 
f
a
i
l
A
t
 
&
&
 
p
h
a
s
e
 
=
=
=
 
"
c
o
m
p
e
n
s
a
t
i
n
g
"
 
&
&
 
i
 
=
=
=
 
p
r
o
g
r
e
s
s
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
e
n
s
a
t
i
n
g
 
=
 
p
h
a
s
e
 
=
=
=
 
"
c
o
m
p
e
n
s
a
t
i
n
g
"
 
&
&
 
i
 
<
 
p
r
o
g
r
e
s
s
 
+
 
1
 
&
&
 
i
 
>
=
 
0
;




 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
o
l
o
r
 
=
 
N
E
U
T
R
A
L
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
l
a
b
e
l
 
=
 
s
.
l
a
b
e
l
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
b
a
d
g
e
 
=
 
"
p
e
n
d
i
n
g
"
;




 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
o
m
p
l
e
t
e
 
|
|
 
(
i
 
<
 
p
r
o
g
r
e
s
s
 
&
&
 
p
h
a
s
e
 
=
=
=
 
"
r
u
n
n
i
n
g
"
)
)
 
{
 
c
o
l
o
r
 
=
 
S
D
;
 
b
a
d
g
e
 
=
 
"
✓
 
d
o
n
e
"
;
 
}


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
u
r
r
e
n
t
 
&
&
 
p
h
a
s
e
 
=
=
=
 
"
r
u
n
n
i
n
g
"
)
 
{
 
c
o
l
o
r
 
=
 
W
A
R
N
;
 
b
a
d
g
e
 
=
 
"
r
u
n
n
i
n
g
…
"
;
 
}


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
F
a
i
l
i
n
g
)
 
{
 
c
o
l
o
r
 
=
 
W
A
R
N
;
 
b
a
d
g
e
 
=
 
"
✕
 
f
a
i
l
e
d
"
;
 
l
a
b
e
l
 
=
 
`
$
{
s
.
l
a
b
e
l
}
 
→
 
$
{
s
.
c
o
m
p
e
n
s
a
t
e
}
`
;
 
}


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
o
m
p
e
n
s
a
t
i
n
g
)
 
{
 
c
o
l
o
r
 
=
 
P
U
R
P
L
E
;
 
b
a
d
g
e
 
=
 
"
↶
 
c
o
m
p
e
n
s
a
t
i
n
g
…
"
;
 
l
a
b
e
l
 
=
 
s
.
c
o
m
p
e
n
s
a
t
e
;
 
}


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
o
m
p
e
n
s
a
t
e
d
 
&
&
 
!
i
s
F
a
i
l
i
n
g
 
&
&
 
!
i
s
C
o
m
p
e
n
s
a
t
i
n
g
)
 
{
 
c
o
l
o
r
 
=
 
P
U
R
P
L
E
;
 
b
a
d
g
e
 
=
 
"
↶
 
c
o
m
p
e
n
s
a
t
e
d
"
;
 
l
a
b
e
l
 
=
 
s
.
c
o
m
p
e
n
s
a
t
e
;
 
}




 
 
 
 
 
 
 
 
 
 
 
 
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
i
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
 
c
o
l
o
r
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
4
0
p
x
 
1
f
r
 
1
3
0
p
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
 
2
8
,
 
h
e
i
g
h
t
:
 
2
8
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
 
`
$
{
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
8
r
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
8
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
6
e
m
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
s
t
a
r
t
}
 
d
i
s
a
b
l
e
d
=
{
p
h
a
s
e
 
=
=
=
 
"
r
u
n
n
i
n
g
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
c
o
m
p
e
n
s
a
t
i
n
g
"
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
,
 
p
h
a
s
e
 
=
=
=
 
"
r
u
n
n
i
n
g
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
c
o
m
p
e
n
s
a
t
i
n
g
"
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
r
u
n
 
s
a
g
a


 
 
 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
s
e
t
P
l
a
y
i
n
g
(
(
p
)
 
=
>
 
!
p
)
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
p
h
a
s
e
 
=
=
=
 
"
i
d
l
e
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
d
o
n
e
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
r
o
l
l
e
d
-
b
a
c
k
"
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
,
 
p
h
a
s
e
 
=
=
=
 
"
i
d
l
e
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
d
o
n
e
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
r
o
l
l
e
d
-
b
a
c
k
"
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
y
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
p
l
a
y
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
,
 
f
a
l
s
e
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
l
e
x
:
 
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
p
h
a
s
e
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
p
h
a
s
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
4
_
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
T
x
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
2
p
c
"
,
 
l
a
b
e
l
:
 
"
2
P
C
"
,
 
i
c
o
n
:
 
<
N
e
t
w
o
r
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
w
o
P
C
A
n
i
m
a
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
s
a
g
a
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
a
g
a
"
,
 
i
c
o
n
:
 
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
a
g
a
A
n
i
m
a
t
i
o
n
 
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
I
n
 
2
P
C
,
 
t
h
e
 
c
o
o
r
d
i
n
a
t
o
r
 
d
i
e
s
 
b
e
t
w
e
e
n
 
p
h
a
s
e
 
1
 
a
n
d
 
p
h
a
s
e
 
2
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
 
w
o
r
s
t
-
c
a
s
e
 
b
e
h
a
v
i
o
r
 
o
f
 
p
a
r
t
i
c
i
p
a
n
t
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
T
h
e
y
 
a
l
l
 
c
o
m
m
i
t
 
i
m
m
e
d
i
a
t
e
l
y
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
b
l
o
c
k
 
h
o
l
d
i
n
g
 
l
o
c
k
s
,
 
w
a
i
t
i
n
g
 
f
o
r
 
t
h
e
 
c
o
o
r
d
i
n
a
t
o
r
'
s
 
d
e
c
i
s
i
o
n
 
(
t
h
i
s
 
i
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
 
2
P
C
 
b
l
o
c
k
i
n
g
 
p
r
o
b
l
e
m
)
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
a
b
o
r
t
 
a
u
t
o
m
a
t
i
c
a
l
l
y
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
e
l
e
c
t
 
a
 
n
e
w
 
c
o
o
r
d
i
n
a
t
o
r
 
i
n
s
t
a
n
t
l
y
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
A
f
t
e
r
 
v
o
t
i
n
g
 
y
e
s
 
i
n
 
p
h
a
s
e
 
1
,
 
p
a
r
t
i
c
i
p
a
n
t
s
 
h
o
l
d
 
l
o
c
k
s
 
u
n
t
i
l
 
t
h
e
 
c
o
o
r
d
i
n
a
t
o
r
 
r
e
t
u
r
n
s
.
 
T
h
i
s
 
i
s
 
w
h
y
 
2
P
C
 
i
s
n
'
t
 
u
s
e
d
 
f
o
r
 
l
o
n
g
 
f
l
o
w
s
 
—
 
a
 
s
t
u
c
k
 
c
o
o
r
d
i
n
a
t
o
r
 
s
t
a
l
l
s
 
e
v
e
r
y
o
n
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
A
 
s
a
g
a
 
h
a
s
 
4
 
s
t
e
p
s
.
 
S
t
e
p
 
3
 
f
a
i
l
s
.
 
W
h
a
t
 
d
o
e
s
 
t
h
e
 
s
a
g
a
 
d
o
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
t
r
y
 
s
t
e
p
 
3
 
f
o
r
e
v
e
r
.
"
,


 
 
 
 
 
 
 
 
"
R
u
n
 
t
h
e
 
c
o
m
p
e
n
s
a
t
i
n
g
 
a
c
t
i
o
n
s
 
f
o
r
 
s
t
e
p
s
 
2
 
a
n
d
 
1
 
i
n
 
r
e
v
e
r
s
e
 
o
r
d
e
r
.
"
,


 
 
 
 
 
 
 
 
"
C
o
n
t
i
n
u
e
 
w
i
t
h
 
s
t
e
p
 
4
.
"
,


 
 
 
 
 
 
 
 
"
T
h
r
o
w
 
a
n
 
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
o
 
t
h
e
 
u
s
e
r
 
a
n
d
 
l
e
a
v
e
 
s
t
a
t
e
 
i
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
W
h
e
n
 
a
 
s
t
e
p
 
f
a
i
l
s
,
 
t
h
e
 
s
a
g
a
 
w
a
l
k
s
 
b
a
c
k
 
t
h
r
o
u
g
h
 
c
o
m
p
l
e
t
e
d
 
s
t
e
p
s
 
a
n
d
 
r
u
n
s
 
e
a
c
h
 
o
n
e
'
s
 
c
o
m
p
e
n
s
a
t
i
o
n
.
 
S
t
a
t
e
 
e
n
d
s
 
u
p
 
l
o
g
i
c
a
l
l
y
 
r
o
l
l
e
d
 
b
a
c
k
,
 
e
v
e
n
 
t
h
o
u
g
h
 
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
 
t
r
a
n
s
a
c
t
i
o
n
s
 
w
e
r
e
 
c
o
m
m
i
t
t
e
d
 
i
n
d
e
p
e
n
d
e
n
t
l
y
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
 
i
s
 
2
P
C
 
u
n
s
u
i
t
a
b
l
e
 
f
o
r
 
a
n
 
U
b
e
r
-
s
t
y
l
e
 
t
r
i
p
 
l
i
f
e
c
y
c
l
e
 
(
r
e
q
u
e
s
t
 
→
 
m
a
t
c
h
 
→
 
d
r
i
v
e
 
→
 
p
a
y
)
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
U
b
e
r
 
d
o
e
s
n
'
t
 
u
s
e
 
d
a
t
a
b
a
s
e
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
f
l
o
w
 
c
a
n
 
t
a
k
e
 
3
0
+
 
m
i
n
u
t
e
s
;
 
h
o
l
d
i
n
g
 
2
P
C
 
l
o
c
k
s
 
f
o
r
 
t
h
a
t
 
l
o
n
g
 
i
s
 
i
m
p
o
s
s
i
b
l
e
 
a
t
 
s
c
a
l
e
.
"
,


 
 
 
 
 
 
 
 
"
2
P
C
 
d
o
e
s
n
'
t
 
w
o
r
k
 
w
i
t
h
 
m
o
b
i
l
e
 
a
p
p
s
.
"
,


 
 
 
 
 
 
 
 
"
D
r
i
v
e
r
s
 
c
a
n
'
t
 
r
u
n
 
2
P
C
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
2
P
C
 
r
e
q
u
i
r
e
s
 
p
a
r
t
i
c
i
p
a
n
t
s
 
t
o
 
h
o
l
d
 
l
o
c
k
s
 
u
n
t
i
l
 
p
h
a
s
e
 
2
 
c
o
m
m
i
t
s
.
 
A
 
t
r
i
p
 
t
a
k
i
n
g
 
3
0
 
m
i
n
u
t
e
s
 
w
o
u
l
d
 
l
o
c
k
 
t
h
e
 
d
r
i
v
e
r
,
 
r
i
d
e
r
,
 
p
a
y
m
e
n
t
 
s
e
r
v
i
c
e
 
f
o
r
 
t
h
e
 
e
n
t
i
r
e
 
r
i
d
e
.
 
S
a
g
a
s
 
(
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
s
 
l
i
k
e
 
T
e
m
p
o
r
a
l
)
 
h
a
n
d
l
e
 
l
o
n
g
-
r
u
n
n
i
n
g
 
f
l
o
w
s
 
w
i
t
h
o
u
t
 
l
o
c
k
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
i
c
h
 
p
r
o
p
e
r
t
y
 
m
u
s
t
 
e
a
c
h
 
s
a
g
a
 
s
t
e
p
 
h
a
v
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
A
t
o
m
i
c
i
t
y
 
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
.
"
,


 
 
 
 
 
 
 
 
"
A
n
 
i
d
e
m
p
o
t
e
n
t
 
c
o
m
p
e
n
s
a
t
i
n
g
 
a
c
t
i
o
n
 
s
o
 
r
e
t
r
i
e
s
 
d
o
n
'
t
 
d
o
u
b
l
e
-
u
n
d
o
.
"
,


 
 
 
 
 
 
 
 
"
C
o
n
s
t
a
n
t
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
.
"
,


 
 
 
 
 
 
 
 
"
L
i
n
e
a
r
i
z
a
b
i
l
i
t
y
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
m
p
e
n
s
a
t
i
n
g
 
a
c
t
i
o
n
s
 
c
a
n
 
b
e
 
r
e
t
r
i
e
d
 
(
n
e
t
w
o
r
k
 
b
l
i
p
s
)
.
 
T
h
e
y
 
m
u
s
t
 
b
e
 
i
d
e
m
p
o
t
e
n
t
 
—
 
r
e
f
u
n
d
i
n
g
 
₹
1
0
0
 
t
w
i
c
e
 
s
h
o
u
l
d
 
s
t
i
l
l
 
r
e
s
u
l
t
 
i
n
 
o
n
e
 
₹
1
0
0
 
r
e
f
u
n
d
.
 
T
h
e
 
f
o
r
w
a
r
d
 
a
c
t
i
o
n
 
s
h
o
u
l
d
 
a
l
s
o
 
b
e
 
i
d
e
m
p
o
t
e
n
t
 
f
o
r
 
t
h
e
 
s
a
m
e
 
r
e
a
s
o
n
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
2
P
C
 
v
s
 
S
a
g
a
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
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
 
c
l
a
s
s
i
c
 
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
o
 
c
h
e
c
k
o
u
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




